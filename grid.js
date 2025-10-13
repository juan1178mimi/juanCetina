function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Muestra solo la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
}
