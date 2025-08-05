// MenuExpansionFunction
function doToggleClassName(obj, onClassName, offClassName){obj.className = (obj.className != onClassName) ? onClassName : offClassName;}
function getParentObj(obj){return obj.parentElement || obj.parentNode;}

// Header
function Header() {
    var html = "";
    html += '<header>';
    html += '<h1>';
    html += '<a href="/index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">';
    // html += '<img src="img/JOP_logo.jpg" alt="Logo" style="height: 100px;">';
    html += '<span class="header-title">Potential of Japanese</span>';
    html += '</a>';
    html += '</h1>';
    html += '<nav>';
    html += '<ul>';
    html += '<li><a class="menu-link" href="index.html">ホーム</a></li>';
    html += '<li><a class="menu-link" href="introduction.html">オンライン授業</a></li>';
    html += '<li><a class="menu-link" href="research.html">単語帳</a></li>';
    html += '<li><a class="menu-link" href="publications&presentations.html">先生になる</a></li>';    
    html += '</ul>';
    html += '</nav>';
    html += '</header>';
    document.write(html);
}


// Menuは、元々左側にあったサブメニューのようなものを削除したので、おそらく必要ない。一旦コメントアウトしておく
// // Menu
// function Menu() {
//     var html = "";
//     html += '<aside>';
//     html += '<ul>';
//     html += '<li><a href="index.html" style="text-decoration: none; font-weight: bold; color: #003066; ">Top</a></li>';
//     html += '<li><a href="introduction.html"> Self-Intro</font></a></li>';
//     html += '<li><a href="research.html">Research</a></li>';
//     html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
//     html += '<li><a href="crystals.html">Crystals</a></li>';

//     html += '</ul>';    
//     html += '</aside>';
//     document.write(html);
// }

// // Menu1
// function Menu1() {
//     var html = "";
//     html += '<aside>';
//     html += '<ul>';
//     html += '<li><a href="index.html">Top</a></li>';
//     html += '<li><a href="introduction.html"style="text-decoration: none; font-weight: bold; color: #003066; ">Self-Intro</a></li>';
//        html += '<ul>'; 
//     html += '<li><a href="#EdBac" data-scroll style="text-decoration: none; ; color:#000000; ">Educational Background</a></li>';
//     html += '<li><a href="#ResExp" data-scroll style="text-decoration: none; color:#000000; ">Research Experience</a></li>';
//     html += '<li><a href="#A&S" data-scroll style="text-decoration: none; color:#000000; ">Awards and Scholarships</a></li>';
//     html += '<li><a href="#Cont" data-scroll style="text-decoration: none; color:#000000; ">Contact Information</a></li>';
//        html += '</ul>'; 
//     html += '<li><a href="research.html">Research</a></li>';
//     html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
// 	html += '<li><a href="crystals.html">Crystals</a></li>';
//     html += '</ul>';    
//     html += '</aside>';
//     document.write(html);
// }

// // Menu3
// function Menu3() {
//     var html = "";
//     html += '<aside>';
//     html += '<ul>';
//     html += '<li><a href="index.html">Top</a></li>';
//     html += '<li><a href="introduction.html">Self-Intro</a></li>';
//     html += '<li><a href="research.html" style="text-decoration: none; font-weight: bold; color: #003066; ">Research</a></li>';
//     html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
//     html += '<li><a href="crystals.html">Crystals</a></li>';
//     html += '</ul>';    
//     html += '</aside>';
//     document.write(html);
// }

// // Menu4
// function Menu4() {
//     var html = "";
//     html += '<aside>';
//     html += '<ul>';
//     html += '<li><a href="index.html">Top</a></li>';
//     html += '<li><a href="introduction.html">Self-Intro</a></li>';
//     html += '<li><a href="research.html">Research</a></li>';
//     html += '<li><a href="publications&presentations.html">Publications & Presentations</a></li>';
//     html += '<li><a href="crystals.html" style="text-decoration: none; font-weight: bold; color: #003066; ">Crystals</a></li>';
//     html += '</ul>';    
//     html += '</aside>';
//     document.write(html);
// }

// // Menu2
// function Menu2() {
//     var html = "";
//     html += '<aside>';
//     html += '<ul>';
//     html += '<li><a href="index.html">Top</a></li>';
//     html += '<li><a href="introduction.html">Self-Intro</a></li>';
//     html += '<li><a href="research.html">Research</a></li>';
//     html += '<li><a href="publications&presentations.html"style="text-decoration: none; font-weight: bold; color: #003066; ">Publications & Presentations</a></li>';
//        html += '<ul>'; 
//     html += '<li><a href="#pub" data-scroll style="text-decoration: none; color:#000000; ">Publications</a></li>';
//      html += '<li><a href="#press" data-scroll style="text-decoration: none; color:#000000; ">Press Release</a></li>';
//     html += '<li><a href="#conf" data-scroll style="text-decoration: none; color:#000000; ">Presentations</a></li>';
//        html += '</ul>'; 
//     html += '<li><a href="crystals.html">Crystals</a></li>';	
//     html += '</ul>';    
//     html += '</aside>';
//     document.write(html);
// }

function Footer() {
    document.write(`
      <footer style="background-color:#f8f8f8; padding:20px 10px; font-size:0.9em; color:#555;">
        <p style="text-align:center;">&copy; 2025 Potential of Japanese. All rights reserved.</p>
        <p style="text-align:center;">
          <strong>会社名:</strong> Potential of Japanese<br>
          <strong>住所:</strong> coming soon...<br>
          <strong>電話番号:</strong> <a href="tel:09093988731">090-9398-8731</a><br>
          <strong>メールアドレス:</strong> <a href="mailto:potential.of.japanese@gmail.com">potential.of.japanese@gmail.com</a><br>
          <strong>SNS情報:</strong> 
          <a href="https://www.threads.com/@potential.of.japanese" target="_blank">Threads</a> |
          <a href="https://www.instagram.com/potential.of.japanese" target="_blank">Instagram</a> |
          <a href="https://x.com/pot_of_Japanese" target="_blank">X</a>
        </p>
        <!--
        <p>
          <a href="mailto:potential.of.japanese@gmail.com">Contact</a> |
          <a href="https://www.threads.com/@potential.of.japanese" target="_blank">Threads</a> |
          <a href="https://www.instagram.com/potential.of.japanese" target="_blank">Instagram</a> |
          <a href="https://x.com/pot_of_Japanese" target="_blank">X</a>
        </p>
        -->
      </footer>
    `);
  }
//   <!--コメントアウト-->
  
  
  
