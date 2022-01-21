// create the ui classes 
class UI {
    constructor(){
        this.noOfCourse = document.querySelector('#NoOfCourse');
        this.institute = document.querySelector('#institute');
        this.university = document.querySelector('#university');
        this.polytechnic = document.querySelector('#polytechnic');
        this.collegeOfEdu = document.querySelector('#collegeOfEdu');
        this.h4 = document.querySelector('.h4');
        this.table = document.querySelector('table');
        // this.result = document.querySelector('.result');
    }

    nextStep(){
        if(this.institute.value === this.university.value && this.noOfCourse.value !== ''){
            this.showInstitute('University grades are A, B, C, D, E, F');
        } else if(this.institute.value === this.polytechnic.value && this.noOfCourse.value !== '') {
            this.showInstitute('Polytechnic grades are A, AB, B, BC, C, CD, D, E, F' );
        } else if(this.institute.value === this.collegeOfEdu.value && this.noOfCourse.value !== '') {
            this.showInstitute('College of Education grades are A, B, C, D, E, F' );
        } else {
            alert('Fill in the no of course that you are offering');
        }
    }

    showInstitute(headerTxt){
        this.h4.textContent = headerTxt;
        this.h4.textContent = headerTxt
        let inner = '';
        for(let i = 0; i < this.noOfCourse.value; i++){
            inner += `
        <tr class="tableRow">
            <td><input type="text" name="" id="" class="dat inputs courseCode"></td>
            <td><input type="number" name="" id="" class="dat inputs creditUnits"></td>
            <td><input type="text" name="" id="" class="dat inputs grades"></td>
        </tr>
            `
        };
        
        this.table.innerHTML = `
        <tbody>
            <tr>
                <th>${sanitizeHTML('Course Code')}</th>
                <th>${sanitizeHTML('Credit Unit')}</th>
                <th>${sanitizeHTML('Grade')}</th>
            </tr>

            <div class="for">
                ${inner}
            </div>
        </tbody>
        `
        this.table.style.display = 'table';
        document.querySelector('.calculate').style.display = 'block';

        let courseCodeArr = [];
        document.querySelectorAll('.courseCode').forEach(crs => {
            crs.addEventListener('blur', function(){
                if(courseCodeArr.includes(crs.value.toLowerCase())){
                    alert(`${crs.value} has been added before`)
                } else {
                    courseCodeArr.push(crs.value.toLowerCase())
                }
            })
        })
    };

    
    calculateGP(grades){
        let inputs = document.querySelectorAll('.inputs');
        let re = /[a-f]/i;
        let reCre = /\d+/;
        let validGrade =[];
        let validCreditUnit =[];
        let InvalidCourse = [];
        // let 
        inputs.forEach(input => {
            if(input.value === ''){
               InvalidCourse.push(false);
            } else if(input.classList.contains('grades')){
                validGrade.push(re.test(input.value));
            } else if(input.classList.contains('creditUnits')){
                validCreditUnit.push(reCre.test(input.value));
            }
        })
        if(!validGrade.includes(false) && !validCreditUnit.includes(false) && !InvalidCourse.includes(false)){
            let allCreditUnits = 0;
            let studentScores = 0;
            let gp = 0
            document.querySelectorAll('.tableRow').forEach(row => {
                let grade = row.children[2].children[0].value.toLowerCase();
                Object.keys(grades).forEach(grd => {
                    if(grade === grd){
                        grade = grades[grd];
                        
                    }
                })
                allCreditUnits += parseFloat(row.children[1].children[0].value);
                studentScores += parseFloat(row.children[1].children[0].value) * grade
            })

            gp = studentScores / allCreditUnits;
            gp = gp.toFixed(2);
            let remark;
            if(this.institute.value === 'University'){
                if(gp <= 5.0 && gp >= 4.50){
                    remark = `Distinction !!!, Congrats You have made it to First Class`;
                } else if(gp <= 4.49 && gp >= 3.50) {
                    remark = `2nd Class Upper! Work Hard, you are almost there`
                } else if(gp <= 3.49 && gp >= 2.50) {
                    remark = `2nd Class Lower! Please do well next time`;
                } else if(gp <= 2.49 && gp >= 1.50) {
                    remark = `Third Class! Please Read your books well and attend tutorials`;
                } else if(gp <= 1.49 && gp >= 1.00) {
                    remark = `Pass! Opps, Read Your books like never before and attend Prayers`;
                } else if(gp <= 0.99 && gp >= 0) {
                    remark = `Failure!!!, please live School for Now and Focus on Yahoo!!!!!!`;
                } else {
                    const er = 'Incorrect Details, Please Check Your Details carefully'
                    alert('Incorrect Details, Please Check Your Details carefully')
                    return er
                
                }
            } else if(this.institute.value === 'Polytechnic'){
                if(gp <= 4.0 && gp >= 3.50){
                    remark = `Distinction !!!, Congrats Your School will be so Proud of You`;
                } else if(gp <= 3.49 && gp >= 3.00) {
                    remark = `Upper Credit! Work Hard, you are almost there`
                } else if(gp <= 2.99 && gp >= 2.50) {
                    remark = `Lower Credit! Please do well next time`;
                } else if(gp <= 2.49 && gp >= 2.00) {
                    remark = `Pass! Opps, Read Your books like never before and attend Prayers`;
                } else if(gp <= 1.99 && gp >= 0) {
                    remark = `Failure!!!, please live School for Now and Focus on Yahoo!!!!!!`;
                } else {
                    const er = 'Incorrect Details, Please Check Your Details carefully'
                    alert('Incorrect Details, Please Check Your Details carefully')
                    return er
                };
            } if(this.institute.value === 'collegeOfEdu'){
                if(gp <= 5.0 && gp >= 4.50){
                    remark = `Distinction !!!, Congrats Your School will be so Proud of You`;
                } else if(gp <= 4.49 && gp >= 3.50) {
                    remark = `Credit!! Work Hard, you are almost there`
                } else if(gp <= 3.49 && gp >= 2.50) {
                    remark = `Merrit!! Please do well next time`;
                } else if(gp <= 2.49 && gp >= 1.50) {
                    remark = `Pass!! Please Read your books well and attend tutorials`;9
                } else if(gp <= 1.49 && gp >= 1.00) {
                    remark = `Low Pass! Opps, Read Your books like never before and attend Prayers`;
                } else if(gp <= 0.99 && gp >= 0) {
                    remark = `Failure!!!, please live School for Now and Focus on Yahoo!!!!!!`;
                } else {
                    const er = 'Incorrect Details, Please Check Your Details carefully'
                    alert('Incorrect Details, Please Check Your Details carefully')
                    return er
                
                }
            }
            const result = document.querySelector('.result');
                result.innerHTML = `
            <div class="resultText">
                <h2 class="gp">${sanitizeHTML(`${gp} CGP`)}</h2>
                <p class="resultTextRmk">${remark}</p>
            </div>
            <button class="resultBtn">OK</button>
            `
                result.style.display = 'block';

                document.querySelector('.resultBtn').addEventListener('click', function(){
                    result.style.display = 'none';
                });
            
        } else {
            alert('please fill in correctly');
        }
    }
}

const sanitizeHTML = function(str){
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};