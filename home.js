

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {

const headerHtml =
    `<tr>
        <th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

const innerHtml = `${headerHtml}
    <tr>
    <td><img class = "Profile" src="../assets/profile-images/Ellipse -2.png" alt="profile_img-1"></td>
    <td>Kunal patil</td>
    <td>Male</td>
    <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Finance</div>
    </td>
    <td>3000000</td>
    <td>1 Nov 2020</td>
    <td>
        <img src="C:\Users\91992\Documents\HTML\EmployeePayrollApp\assets\icons\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="C:\Users\91992\Documents\HTML\EmployeePayrollApp\assets\icons\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
    </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}