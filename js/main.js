$(document).ready(function() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 595) {
        $('#navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 595) {
        $('#navbar').removeClass('navbar-fixed');
      }
    });

    $('a[class="nav-link d-flex"]').click(function(e){
      e.preventDefault();
      $('body, html').animate({
        scrollTop: ($("#" + e.currentTarget.name).offset().top - 175)
      }, 600);
   });

   $.getJSON("./assets/rv-products.json", function(json){
     const herbaldata = json["rv-products"]["herbal"];
     const aromadata = json["rv-products"]["aroma"];
     const pharmaapidata = json["rv-products"]["pharmaapi"];
     const researchdata = json["rv-products"]["research"];
     const aminoacidsdata = json["rv-products"]["aminoacids"];

     const herbaldatabody = $("#herbal-data-body")[0];
     const aromadatabody = $("#aroma-data-body")[0];
     const apidatabody = $("#api-table-body")[0];
     const researchdatabody = $("#research-data-body")[0];
     const aminoacidsdatabody = $("#aminoacids-data-body")[0];

     generateSingleColTable(herbaldata, herbaldatabody);
     generateSingleColTable(pharmaapidata, apidatabody);
     generateDoubleColTable(aromadata, aromadatabody);
     generateDoubleColTable(researchdata, researchdatabody);
     generateDoubleColTable(aminoacidsdata, aminoacidsdatabody);
   });

   generateSingleColTable = (tableData, tableBodyElement) => {
      for(var i=0; i< tableData.length;i++){
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const textNode1 = document.createTextNode(tableData[i]);
        td1.appendChild(textNode1);
        tr.appendChild(td1);
        tableBodyElement.appendChild(tr);
      }
   }

   generateDoubleColTable = (tableData, tableBodyElement) => {
    for(var i=0; i< tableData.length;i++){
      const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const textNode1 = document.createTextNode(tableData[i].name);
          const textNode2 = document.createTextNode(tableData[i].casno);
          td1.appendChild(textNode1);
          td2.appendChild(textNode2);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tableBodyElement.appendChild(tr);
    }
 }

  });

  