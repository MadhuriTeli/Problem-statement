const statements = [
  {
    _id: "1",
    title: "Reserchers of qualities throughout of reserch",
    createdBy: "Microsoft",
    category: "Public",
    importance: "Critical",
    dueDate: "01-11-2020",
    status: "Open",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "2",
    title: "Consistency in the Firsh Four Steps of Reservh",
    createdBy: "Google",
    category: "Private",
    importance: "Critical",
    dueDate: "01-11-2020",
    status: "Open",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "3",
    title: "Northeastern U.S. urban juvenile detention centers",
    createdBy: "Service Now",
    category: "Public",
    importance: "Medium",
    dueDate: "01-11-2020",
    status: "Open",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "4",
    title: "These three are the most important elements",
    createdBy: "Google",
    category: "Private",
    importance: "Low",
    dueDate: "01-11-2020",
    status: "Open",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "5",
    title: " The Development of Rating Scales to Measure",
    createdBy: "Adobe",
    category: "Private",
    importance: "High",
    dueDate: "01-11-2020",
    status: "Open",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "6",
    title: "The Relationship Between Maternal Employment",
    createdBy: "Service Now",
    category: "Private",
    importance: "Medium",
    dueDate: "01-11-2020",
    status: "Open",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "7",
    title: "Johnson and Christensen section follows layout",
    createdBy: "Google",
    category: "Public",
    importance: "High",
    dueDate: "01-11-2020",
    status: "Closed",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "8",
    title: "Measure the Quality of Preschool Literacy Environment",
    createdBy: "Adobe",
    category: "Public",
    importance: "Low",
    dueDate: "01-11-2020",
    status: "Closed",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "9",
    title: "Resercher justified the need for her study center",
    createdBy: "Service Now",
    category: "Private",
    importance: "Critical",
    dueDate: "01-11-2020",
    status: "Open",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
  {
    _id: "10",
    title: "Purpose statement but it may be identified by other",
    createdBy: "Microsoft",
    category: "Private",
    importance: "High",
    dueDate: "01-11-2020",
    status: "In-Progress",
    tag: '<td><i class="fas fa-ellipsis-v"></i></td>',
  },
];
/* finction to display paper clip*/
function titleFunction(stat) {
  if (
    stat == 1 ||
    stat == 3 ||
    stat == 4 ||
    stat == 6 ||
    stat == 8 ||
    stat == 10
  ) {
    return `<span><i class="fas fa-paperclip"></i></span>`;
  } else {
    return "";
  }
}

/* to display status value in different style according its value  */
function statusFunction(status) {
  if (status === "Open") {
    return `<div class="alert alert-danger border-danger status" role="alert">Open</div>`;
  } else if (status === "Closed") {
    return `<div class="alert alert-success border-success status" role="alert">Closed</div>`;
  } else {
    return `<div class="alert alert-warning border-warning status" role="alert">In-Progress</div>`;
  }
}

/* styling critical value of importance */
function criticalFunction(importance) {
  if (importance === "Critical") {
    return `<div class="critical-circle"></div>Critical`;
  } else {
    return importance;
  }
}

$(document).ready(function () {
  const statementsElement = document.getElementById("statement-table");
  statements.forEach((statement) => {
    const statementEle = document.createElement("tr"); //cretes new row ontp  the table
    // add table data on row
    statementEle.innerHTML = `<td>${titleFunction(statement._id)}<a href="#"> ${
      statement.title
    }</a></td>
    <td> ${statement.createdBy} </td>
    <td> ${statement.category} </td>
    <td> ${criticalFunction(statement.importance)} </td>
    <td> ${statement.dueDate} </td>
    <td> ${statusFunction(statement.status)} </td>
     <td>
     <div class="dropdown">
     <i class="fas fa-ellipsis-v "
     type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 </i><div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Assign Project</a>
            <a class="dropdown-item" href="#">Assign Contact</a>
            <a class="dropdown-item" href="#">Add Notes</a>
            <a class="dropdown-item" href="#" >View Notes</a>
            <a class="dropdown-item" href="#">Edit</a>
            <a class="dropdown-item view" href="#">View</a>
            <a class="dropdown-item" href="#">Copy</a>
            <a class="dropdown-item" href="#">Delete</a>
          </div>
          </div></td>
  `;
    /* added dropdown on action icon  */
    statementsElement.appendChild(statementEle);
    // append table data to table rows
  });

  /*      View  Problem Statment Pop Window        */

  $("#close").on("click", function () {
    $("#problemStatement").hide();
  });

  $(".view").click(function () {
    $("#problemStatement").show();
  });

  var input = document.getElementById( 'files' );
  var output = document.getElementById( 'filename' );

  input.addEventListener( 'change', displayFileName );
  function displayFileName( event ) {

  output.innerHTML = '<ul>';
  for (var i = 0; i < input.files.length; ++i) {
    output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
  }
  output.innerHTML += '</ul>';
      }
});
