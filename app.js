const ui = new UI();

document.querySelector('#next').addEventListener('click', (e) => {
    e.preventDefault();

    ui.nextStep()
});

document.querySelector('.calculate').addEventListener('click', function(){
    if(ui.institute.value === 'University'){
        ui.calculateGP( { a:5, b:4, c:3, d:2, e:1, f:0 });
    } else if (ui.institute.value === 'Polytechnic'){
        ui.calculateGP( { a:4.0, ab:3.5, b:3.25, bc:3.0, c:2.75, cd:2.50, d:2.25, e:2.0, f:0 });
    } else if (ui.institute.value === 'collegeOfEdu'){
        ui.calculateGP( { a:5, b:4, c:3, d:2, e:1, f:0 });
    }
})


