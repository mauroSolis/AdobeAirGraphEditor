function changeContent(tablecell)
{
    //alert(tablecell.firstChild.nodeValue);
    tablecell.innerHTML = "<INPUT type=text name=newname onBlur=\"javascript:submitNewName(this);\" value=\""+tablecell.innerHTML+"\">";
    tablecell.firstChild.focus();
}
function submitNewName(textfield)
{
    //alert(textfield.value);
    textfield.parentNode.innerHTML= textfield.value;
}


function addColumn(tblId)
{
	var tblHeadObj = document.getElementById(tblId).tHead;
	for (var h=0; h<tblHeadObj.rows.length; h++) {
		var newTH = document.createElement('th');
		tblHeadObj.rows[h].appendChild(newTH);		
		newTH.innerHTML = 'New Header';
		newTH.onclick = function(){changeContent(this)} 
	}

	var tblBodyObj = document.getElementById(tblId).tBodies[0];
	for (var i=0; i<tblBodyObj.rows.length; i++) {
		var newCell = tblBodyObj.rows[i].insertCell(-1);
		newCell.innerHTML = 0;
		newCell.onclick = function(){changeContent(this)} 
		
	}
}
function deleteColumn(tblId)
{
	var allRows = document.getElementById(tblId).rows;
	for (var i=0; i<allRows.length; i++) {
		if (allRows[i].cells.length > 1) {
			allRows[i].deleteCell(-1);
		}
	}
}

function addRowToTable()
{
$('#tblSample tbody>tr:last').clone(true).insertAfter('#tblSample tbody>tr:last');
          return false;

}



function removeRowFromTable()
{
$("tr:last").remove()
}


//------------------------------------------------------------------------------

function getCaret(el) { 
  if (el.selectionStart) { 
    return el.selectionStart; 
  } else if (document.selection) { 
    el.focus(); 
    var r = document.selection.createRange(); 
    if (r == null) return 0; 
    var re = el.createTextRange(), 
        rc = re.duplicate(); 
    re.moveToBookmark(r.getBookmark()); 
    rc.setEndPoint('EndToStart', re); 
    var add_newlines = 0;
    for (var i=0; i<rc.text.length; i++)
      if (rc.text.substr(i, 2) == '\r\n') {
        add_newlines += 2;
        i++;
      }
    return rc.text.length - add_newlines; 
  }
  return 0; 
};

function heading() {
  var heading_text = document.getElementById('heading-text');
  var heading_size = document.getElementById('heading-size');
  var textarea = document.getElementById('textarea');
  var cursor = getCaret(textarea);
  var text = textarea.value;
  var text = text.substring(0,cursor)+'<H'+heading_size.value+'>'+
             heading_text.value+'</H'+heading_size.value+'>'+
             text.substring(cursor,text.length);
  textarea.value = text;
};

function itemList() {
  var orderText = document.getElementById('item-organize');
  var itemsText = document.getElementById('item-text');
  var textarea = document.getElementById('textarea');
  var cursor = getCaret(textarea);
  var text = textarea.value;
  
  var elements = itemsText.value.split("*");
  var x=1;
  if(orderText.value == 'OL')
  {
	text = text + "<ol>";
	while(x < elements.length)
	{
		text= text+"<li>"+elements[x]+"</li>";
		x++;
	}
	text= text + "</ol>";
	textarea.value = text;
  }
  else
  {
	text = text + "<ul>";
	while(x < elements.length)
	{
		text= text+"<li>"+elements[x]+"</li>";
		x++;
	}
	text= text + "</ul>";
	var regX = /\r\n|\r|\n/g;
	var text2 = text.replace(regX , " ");
	textarea.value = text2;
  }
  
  
};

function newfile() {
  //air.trace("Ejecutando newfile..");
  document.getElementById("textarea").value = '';
};
function openfile() {
  //air.trace("Ejecutando openfile..");
  var file = air.File.documentsDirectory;
  var filters = new Array();
  filters.push(new air.FileFilter("HTML Files","*.html"));
  file.browseForOpen(file,filters);
  file.addEventListener(air.Event.SELECT,function() {
    //air.trace("Cargando archivo..");
    var fileStream = new air.FileStream(); 
    fileStream.open(file, air.FileMode.READ); 
    var content = fileStream.readUTFBytes(fileStream.bytesAvailable);
    document.getElementById("textarea").value = content;
    update();
  });
};
function savefile() {
  

};
function exit() {
  window.nativeWindow.close();
};
/*function update() {
	
}
 var textarea = document.getElementById("textarea");
 var view = document.getElementById("view");
 if ((typeof textarea === "undefined") ||
     (typeof view === "undefined")) return;
 else view.innerHTML = textarea.value;
};*/
var timer = setInterval("update();", 120);