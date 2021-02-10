 export default statements = [{
    _id: '1',
    title: 'Reserchers of qualities throughout of reserch',
    createdBy: 'Microsoft',
    category: 'Public',
    importance: 'Critical',
    dueDate: '01-11-2020',
    status: 'Open'
  },
  {
    _id: '2',
    title: 'Consistency in the Firsh Four Steps of Reservh',
    createdBy: 'Google',
    category: 'Private',
    importance: 'Critical',
    dueDate: '01-11-2020',
    status: 'Open'
  },
  {
    _id: '3',
    title: 'Northeastern U.S. urban juvenile detention centers',
    createdBy: 'Service Now',
    category: 'Public',
    importance: 'Medium',
    dueDate: '01-11-2020',
    status: 'Open'
  },
  {
    _id: '4',
    title: 'These three are the most important elements',
    createdBy: 'Google',
    category: 'Private',
    importance: 'Low',
    dueDate: '01-11-2020',
    status: 'Open'
  },
  {
    _id: '5',
    title: ' The Development of Rating Scales to Measure',
    createdBy: 'Adobe',
    category: 'Private',
    importance: 'High',
    dueDate: '01-11-2020',
    status: 'Open'
  },
  {
    _id: '6',
    title: 'The Relationship Between Maternal Employment',
    createdBy: 'Service Now',
    category: 'Private',
    importance: 'Medium',
    dueDate: '01-11-2020',
    status: 'Open'
  },
  {
    _id: '7',
    title: 'Johnson and Christensen section follows layout',
    createdBy: 'Google',
    category: 'Public',
    importance: 'High',
    dueDate: '01-11-2020',
    status: 'Closed'
  },
  {
    _id: '8',
    title: 'Measure the Quality of Preschool Literacy Environment',
    createdBy: 'Adobe',
    category: 'Public',
    importance: 'Low',
    dueDate: '01-11-2020',
    status: 'Closed'
  },
  {
    _id: '9',
    title: 'Resercher justified the need for her study center',
    createdBy: 'Service Now',
    category: 'Private',
    importance: 'Critical',
    dueDate: '01-11-2020',
    status: 'Open'
  },
  {
    _id: '10',
    title: 'Purpose statement but it may be identified by other',
    createdBy: 'Microsoft',
    category: 'Private',
    importance: 'High',
    dueDate: '01-11-2020',
    status: 'In-Progress'
  }
];

const statementsElement = document.getElementById("statement");
statements.forEach(stat => {
  const statementEle = document.createElement("tr");
  statementEle.innerHTML =
    `<td>${statements.title}</td>
    <td>${statements.createdBy}</td>
    <td>${statements.category}</td>
    <td>${statements.importance}</td>
    <td>${statements.dueDate}</td>
    <td>${statements.status}</td>
    <td><i class="fas fa-ellipsis-v"></i></td>
  `;
  statementsElement.appendChild(statementEle);
  console.log(statements.title);
});

  /*
   for (var i = 0; i < Object.keys(statements).length; i++) {
    $('#table_content').append('<tr>');
    for (var j = 0; j < Object.keys(statements[0]).length; j++) {
      $('#table_content').append('<td>' + statements[i][Object.keys(statements[0])[j + 1]] + '</td>');
    }
    $('#table_content').append('</tr>');
  }
   */