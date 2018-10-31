window.addEventListener('load', function () {
    // ELEMENTS FOR TABS, TABLES, AND CLIMB PAGE BACKGROUND
    const mnt1Tab = document.getElementById('mountain-1');
    const mnt2Tab = document.getElementById('mountain-2');
    const table1 = document.getElementById('schedule-1');
    const table2 = document.getElementById('schedule-2');
    const climbBG = document.querySelector('.climb-bg');

    console.log(climbBG);

    // EVENT LISTENERS FOR TABS
    mnt1Tab.addEventListener('click', function (e) {
        e.preventDefault();

        climbBG.classList.remove('mountain-2');
        climbBG.classList.add('mountain-1');
        mnt1Tab.classList.add('active');
        mnt2Tab.classList.remove('active');
        table1.style.display = 'block';
        table2.style.display = 'none';
    });
    
    mnt2Tab.addEventListener('click', function (e) {
        e.preventDefault();

        climbBG.classList.remove('mountain-1');
        climbBG.classList.add('mountain-2');
        mnt1Tab.classList.remove('active');
        mnt2Tab.classList.add('active');
        table1.style.display = 'none';
        table2.style.display = 'block';
    });

});
