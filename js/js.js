function shuffle() {
  var trs = document.querySelectorAll('tr'),
      i = trs.length,
      tr;
  for (; i > 1; i -= 1) {
    tr = trs.item(Math.floor(Math.random() * i));
    tr.parentNode.appendChild(tr);
  }
}

function editThisPage() {
  window.location = "http://github.com/plujon/recovery";
}

$(function () {
  var table = $('#thetable').DataTable({
    dom: 'Bfrtip',
    colReorder: true,
    buttons: [
      {
        action: shuffle,
        text: '<span class="glyphicon glyphicon-refresh"></span> shuffle</div>'
      },
      {
        extend: 'copy',
        titleAttr: 'Copy visible data to clipboard.',
        text: '<span class="glyphicon glyphicon-copy"></span> copy</div>'
      },
      {
        extend: 'csv',
        titleAttr: 'Export data as csv.',
        text: '<span class="glyphicon glyphicon-download-alt"></span> csv</div>'
      },
      {
        extend: 'pdf',
        titleAttr: 'Export data as pdf.',
        text: '<span class="glyphicon glyphicon-download-alt"></span> pdf</div>'
      },
      {
        extend: 'colvis',
        titleAttr: 'Select visible columns.',
        text: '<span class="glyphicon glyphicon-eye-close"></span> columns</div>'
      },
      {
        action: editThisPage,
        titleAttr: 'If you do not know how to use github, feel free to use the contact me link on the github page.  If you would like to see a built-in table editor, that could be done.',
        text: '<span class="glyphicon glyphicon-edit"></span> edit</div>'
      }
    ]});
});
