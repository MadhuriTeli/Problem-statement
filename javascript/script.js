
const statements = [{
    _id: '1',
    title: 'Reserchers of qualities throughout of reserch',
    createdBy: 'Microsoft',
    category: 'Public',
    importance: 'Critical',
    dueDate: '01-11-2020',
    status: 'Open',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '2',
    title: 'Consistency in the Firsh Four Steps of Reservh',
    createdBy: 'Google',
    category: 'Private',
    importance: 'Critical',
    dueDate: '01-11-2020',
    status: 'Open',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '3',
    title: 'Northeastern U.S. urban juvenile detention centers',
    createdBy: 'Service Now',
    category: 'Public',
    importance: 'Medium',
    dueDate: '01-11-2020',
    status: 'Open',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '4',
    title: 'These three are the most important elements',
    createdBy: 'Google',
    category: 'Private',
    importance: 'Low',
    dueDate: '01-11-2020',
    status: 'Open',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '5',
    title: ' The Development of Rating Scales to Measure',
    createdBy: 'Adobe',
    category: 'Private',
    importance: 'High',
    dueDate: '01-11-2020',
    status: 'Open',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '6',
    title: 'The Relationship Between Maternal Employment',
    createdBy: 'Service Now',
    category: 'Private',
    importance: 'Medium',
    dueDate: '01-11-2020',
    status: 'Open',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '7',
    title: 'Johnson and Christensen section follows layout',
    createdBy: 'Google',
    category: 'Public',
    importance: 'High',
    dueDate: '01-11-2020',
    status: 'Closed',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '8',
    title: 'Measure the Quality of Preschool Literacy Environment',
    createdBy: 'Adobe',
    category: 'Public',
    importance: 'Low',
    dueDate: '01-11-2020',
    status: 'Closed',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '9',
    title: 'Resercher justified the need for her study center',
    createdBy: 'Service Now',
    category: 'Private',
    importance: 'Critical',
    dueDate: '01-11-2020',
    status: 'Open',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  },
  {
    _id: '10',
    title: 'Purpose statement but it may be identified by other',
    createdBy: 'Microsoft',
    category: 'Private',
    importance: 'High',
    dueDate: '01-11-2020',
    status: 'In-Progress',
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>'
  }
];

$(document).ready(function () {

  function statusFunction(status) {
    if (status === 'Open') {
      return `<div class="alert alert-danger border-danger status" role="alert">Open</div>`;
    } else if (status === 'Closed') {
      return `<div class="alert alert-success border-success status" role="alert">Closed</div>`;
    } else {
      return `<div class="alert alert-warning border-warning status" role="alert">In-Progress</div>`;
    }
  }


  const statementsElement = document.getElementById("statement-table");
  statements.forEach(statement => {
    const statementEle = document.createElement("tr");

    statementEle.innerHTML =


      `<td> <a href="#">${statement.title} </a></td>
    <td> ${statement.createdBy} </td>
    <td> ${statement.category} </td>
    <td> ${statement.importance} </td>
    <td> ${statement.dueDate} </td>
    <td> ${statusFunction(statement.status)} </td>
     <td><i class="fas fa-ellipsis-v"></i></td>
  `;
    statementsElement.appendChild(statementEle);
  });

});