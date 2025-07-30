// MenuExpansionFunction
function doToggleClassName(obj, onClassName, offClassName){obj.className = (obj.className != onClassName) ? onClassName : offClassName;}
function getParentObj(obj){return obj.parentElement || obj.parentNode;}

// Header
function Header() {
    var html = "";
    html += '<header>';
    html += '<h1><a href="/index.html"><font color="white">Mohamed Oudah</font></a></h1>';
    html += '<nav>';
    html += '<ul>';
    html += '<li><a href="index.html"><font color="white">Top</font></a></li>';
    html += '<li><a href="introduction.html"><font color="white">Self-Intro</font></a></li>';
    html += '<li><a href="research.html"><font color="white">Research</font></a></li>';    
    html += '<li><a href="publications&presentations.html"><font color="white">Publications & Presentations</font></a></li>';
    html += '<li><a href="crystals.html"><font color="white">Crystals</font></a></li>';
    html += '</ul>';
    html += '</nav>';
    html += '</header>';
    document.write(html);
}

// Menu
function Menu() {
    var html = "";
    html += '<aside>';
    html += '<ul>';
    html += '<li><a href="index.html" style="text-decoration: none; font-weight: bold; color: #003066; ">Top</a></li>';
    html += '<li><a href="introduction.html"> Self-Intro</font></a></li>';
    html += '<li><a href="research.html">Research</a></li>';
    html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
    html += '<li><a href="crystals.html">Crystals</a></li>';

    html += '</ul>';    
    html += '</aside>';
    document.write(html);
}

// Menu1
function Menu1() {
    var html = "";
    html += '<aside>';
    html += '<ul>';
    html += '<li><a href="index.html">Top</a></li>';
    html += '<li><a href="introduction.html"style="text-decoration: none; font-weight: bold; color: #003066; ">Self-Intro</a></li>';
       html += '<ul>'; 
    html += '<li><a href="#EdBac" data-scroll style="text-decoration: none; ; color:#000000; ">Educational Background</a></li>';
    html += '<li><a href="#ResExp" data-scroll style="text-decoration: none; color:#000000; ">Research Experience</a></li>';
    html += '<li><a href="#A&S" data-scroll style="text-decoration: none; color:#000000; ">Awards and Scholarships</a></li>';
    html += '<li><a href="#Cont" data-scroll style="text-decoration: none; color:#000000; ">Contact Information</a></li>';
       html += '</ul>'; 
    html += '<li><a href="research.html">Research</a></li>';
    html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
	html += '<li><a href="crystals.html">Crystals</a></li>';
    html += '</ul>';    
    html += '</aside>';
    document.write(html);
}

// Menu3
function Menu3() {
    var html = "";
    html += '<aside>';
    html += '<ul>';
    html += '<li><a href="index.html">Top</a></li>';
    html += '<li><a href="introduction.html">Self-Intro</a></li>';
    html += '<li><a href="research.html" style="text-decoration: none; font-weight: bold; color: #003066; ">Research</a></li>';
    html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
    html += '<li><a href="crystals.html">Crystals</a></li>';
    html += '</ul>';    
    html += '</aside>';
    document.write(html);
}

// Menu3
function Menu4() {
    var html = "";
    html += '<aside>';
    html += '<ul>';
    html += '<li><a href="index.html">Top</a></li>';
    html += '<li><a href="introduction.html">Self-Intro</a></li>';
    html += '<li><a href="research.html">Research</a></li>';
    html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
    html += '<li><a href="crystals.html" style="text-decoration: none; font-weight: bold; color: #003066; ">Crystals</a></li>';
    html += '</ul>';    
    html += '</aside>';
    document.write(html);
}

// Menu2
function Menu2() {
    var html = "";
    html += '<aside>';
    html += '<ul>';
    html += '<li><a href="index.html">Top</a></li>';
    html += '<li><a href="introduction.html">Self-Intro</a></li>';
    html += '<li><a href="research.html">Research</a></li>';
    html += '<li><a href="publications&presentations.html"style="text-decoration: none; font-weight: bold; color: #003066; ">Publications & Presentations</a></li>';
       html += '<ul>'; 
    html += '<li><a href="#pub" data-scroll style="text-decoration: none; color:#000000; ">Publications</a></li>';
     html += '<li><a href="#press" data-scroll style="text-decoration: none; color:#000000; ">Press Release</a></li>';
    html += '<li><a href="#conf" data-scroll style="text-decoration: none; color:#000000; ">Presentations</a></li>';
       html += '</ul>'; 
    html += '<li><a href="crystals.html">Crystals</a></li>';	
    html += '</ul>';    
    html += '</aside>';
    document.write(html);
}

function Footer() {
    var html = "";
    html += '<footer>';
    html += '<small><a href="https://hallas.phas.ubc.ca/home" target="_blank">Return to The Quantum Materials Design Lab</a></small><br>';
    html += '<small>Copyright (C) Mohamed OUDAH</small>';
    html += '</footer>';
    document.write(html);
}

