SELECT 
    e.id AS employee_id,
    e.nik,
    e.name,
    e.is_active,
    p.gender,
    EXTRACT(YEAR FROM AGE(p.date_of_birth)) || ' Years Old' AS age,
    ed.name AS school_name,
    ed.level,
    CASE
        WHEN COUNT(f.id) = 0 THEN '-'
        ELSE COUNT(f.id) FILTER (WHERE f.relation_status = 'Istri') || ' Istri & ' ||
             COUNT(f.id) FILTER (WHERE f.relation_status = 'Anak') || ' Anak'
    END AS family_data
FROM 
    employee e
LEFT JOIN 
    education ed ON e.id = ed.employee_id
LEFT JOIN 
    employee_profile p ON e.id = p.employee_id
LEFT JOIN 
    employee_family  f ON e.id = f.employee_id
GROUP BY 
    e.id, e.nik, e.name, e.is_active, p.gender, p.date_of_birth, ed.name, ed.level;
