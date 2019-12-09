import { storiesOf } from "@storybook/html";
import { withRunScript } from "storybook-addon-run-script/html";

const runScript =
  "$(document).ready(function () {\n" +
  "        //Closes and opens sidebar. On sidebar close, also closes submenus\n" +
  '        $("#sidebarCollapse").on("click", function () {\n' +
  '            $(".sidebar-controller a").each(function (idx, a) {\n' +
  '                if ($(a).attr("aria-expanded") === "true" && ($(a).hasClass("firstLevel") || $(a).hasClass("secondLevel"))) {\n' +
  "                    $(a).click();\n" +
  "                }\n" +
  "            });\n" +
  "            $('.sidebar-controller').toggleClass('active');\n" +
  "        });\n" +
  "\n" +
  "        //when submenu is opened, closes all other submenus\n" +
  '        $(".firstLevel").on("click", function () {\n' +
  "            const clicked = $(this);\n" +
  '            $(".firstLevel").each(function (idx, a) {\n' +
  '                if ($(a).attr("aria-expanded") === "true" && clicked[0] !== $(a)[0]) {\n' +
  "                    $(a).click();\n" +
  "                }\n" +
  "            });\n" +
  "\n" +
  "            //if submenu is clicked when sidebar is collapsed, open sidebar\n" +
  "            if ($('#sidebar').hasClass(\"active\")) {\n" +
  "                $('#sidebar').toggleClass('active');\n" +
  "            }\n" +
  "        });\n" +
  "\n" +
  '        $("#sidebar li").on("click", function () {\n' +
  '            if ($("body").width() < 376) return;\n' +
  "            //calculates if there is enough room for the dropdown menu underneath. If not - lift it up.\n" +
  "            const spaceDown = $(window).scrollTop() + $(window).height() - ($(this).offset().top + $(this).height());\n" +
  '            const height = $(this).outerHeight() * $(this).children(":last").children().length;\n' +
  "\n" +
  '            //console.log($(this).children(":last-child"));\n' +
  "\n" +
  "            if (spaceDown < height) {\n" +
  '                if ($(this).parent().parent().is("li")) {\n' +
  "                    const height2 = $(this).outerHeight() * $(this).parent().children().length + $(this).outerHeight();\n" +
  '                    $(this).children(":last").each(function (id, el) {\n' +
  "                        $(el).attr('style', 'margin-top: -' + height2 + \"px\")\n" +
  "                    })\n" +
  "                } else if ($(this).children().length > 1) {\n" +
  '                    $(this).children(":last").each(function (id, el) {\n' +
  "                        $(el).attr('style', 'margin-top: -' + height + \"px\");\n" +
  "                    })\n" +
  "                }\n" +
  '                addShadow($(this).children(":last-child"), true);\n' +
  "            }else{\n" +
  '                addShadow($(this).children(":last-child"), false);\n' +
  "            }\n" +
  "        });\n" +
  "\n" +
  "        //used to open menu with mobile header\n" +
  '        $("#sidemenuOpen").on("click", function () {\n' +
  "            $('#sidebar').toggleClass('active');\n" +
  "            $(\".c-mobile-header\").toggleClass('active');\n" +
  "        });\n" +
  "\n" +
  "        const addShadow = (element, isShifted) => {\n" +
  "            //guard clauses to check if the element already has shadowClass and if the list is a sublist\n" +
  '            if(element.children(":first").hasClass("shadowClass") || element.children(":last").hasClass("shadowClass")) return;\n' +
  '            if (!element.parent().parent().is("ul")) return;\n' +
  "\n" +
  "\n" +
  "            const parentLength = element.parent().parent().children().length;\n" +
  "            const elementLength = element.children().length;\n" +
  "\n" +
  "            if (parentLength >= elementLength) {\n" +
  "                element.children().each((id, el) => {\n" +
  '                    $(el).toggleClass("shadowClass")\n' +
  "                })\n" +
  "            } else {\n" +
  "                if(isShifted){\n" +
  "                    element.children().slice(parentLength, elementLength).each((id, el) => {\n" +
  '                        $(el).toggleClass("shadowClass")\n' +
  "                    })\n" +
  "                }else {\n" +
  "                    element.children().slice(0, parentLength).each((id, el) => {\n" +
  '                        $(el).toggleClass("shadowClass")\n' +
  "                    })\n" +
  "                }\n" +
  "                }\n" +
  "        };\n" +
  "    });";

storiesOf("Navigation", module)
  .addDecorator(withRunScript(runScript))
  .add(
    "primary",
    () =>
      '<div class="c-sidenav c-sidenav--over-8">\n' +
      '  <div class="wrapper ">\n' +
      "    <!-- Sidebar  -->\n" +
      '    <nav id="sidebar" class="sidebar-controller">\n' +
      '    <nav id="sidebar" class="sidebar-controller">\n' +
      "      <ul>\n" +
      "        <li>\n" +
      '          <a href="#" id="sidebarCollapse" class="sidenav-header">\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/menu_icon.png" alt="Ava menüü ikoon" />\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/X_Icon.png" alt="Sulge menüü ikoon" />\n' +
      "            <p>Kitsendan menüü</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/home.png" alt="Avalehe menüü ikoon" />\n' +
      "            <p>Avaleht</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/country.png"\n' +
      '              alt="Eesti Vabariigi menüü ikoon"\n' +
      "            />\n" +
      "            <p>Eesti Vabariik</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      "          <a\n" +
      '            href="#tervisekaitseSubmenu"\n' +
      '            data-toggle="collapse" aria-expanded="false" aria-haspopup="”true”" class="firstLevel">\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/healthcare.png" alt="Tervis ja tervisekaitse menüü ikoon"/>\n' +
      "            <p>Tervis ja tervisekaitse</p>\n" +
      "          </a>\n" +
      '          <ul class="collapse list-unstyled" id="tervisekaitseSubmenu">\n' +
      "            <li>\n" +
      "              <a\n" +
      '                href="#page1Submenu"\n' +
      '                data-toggle="collapse"\n' +
      '                aria-expanded="false"\n' +
      '                aria-haspopup="”true”"\n' +
      '                class="secondLevel"\n' +
      "              >\n" +
      "                Tervishoid ja arstiabi\n" +
      "              </a>\n" +
      '              <ul class="collapse list-unstyled" id="page1Submenu">\n' +
      '                <li><a href="#">Minu retseptid</a></li>\n' +
      '                <li><a href="#">Ravikindlusts</a></li>\n' +
      '                <li><a href="#">Arstiabi</a></li>\n' +
      '                <li><a href="#">Arstiabi ja ravi välismaal</a></li>\n' +
      '                <li><a href="#">Ajutine töövõimetus</a></li>\n' +
      '                <li><a href="#">Haigushüvitise maksmine</a></li>\n' +
      '                <li><a href="#">Püsiv töövõimetus</a></li>\n' +
      '                <li><a href="#">Tervis reisil</a></li>\n' +
      '                <li><a href="#">Vaktsineerimine</a></li>\n' +
      '                <li><a href="#">Ravimite ohutus ja kõrvaltoimetest teatamine</a></li>\n' +
      "              </ul>\n" +
      "            </li>\n" +
      "            <li>\n" +
      '              <a href="#">Toidu- ja tarbekaupade ohutus</a>\n' +
      "            </li>\n" +
      "            <li>\n" +
      '              <a href="#">Töötervishoid</a>\n' +
      "            </li>\n" +
      "          </ul>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/grants.png"\n' +
      '              alt="Toetused, sotsiaalteenused ja pensioni andmete menüü ikoon"\n' +
      "            />\n" +
      "            <p>Toetused, sotsiaalteenused ja pensionid andmed</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/family.png" alt="Perekonna menüü ikoon" />\n' +
      "            <p>Perekond</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/work.png" alt="Töö menüü ikoon" />\n' +
      "            <p>Töö ja töösuhted</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/business.png"\n' +
      '              alt="Ettevõtluse menüü ikoon"\n' +
      "            />\n" +
      "            <p>Ettevõtlus</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/specialReq.png"\n' +
      '              alt="Erinõuetega tegevusalade menüü ikoon"\n' +
      "            />\n" +
      "            <p>Erinõuetega tegevusalad</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/disability.png"\n' +
      '              alt="Puudega inimesed menüü ikoon"\n' +
      "            />\n" +
      "            <p>Puudega inimesed</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/documents.png"\n' +
      '              alt="Kodakondsuse ja dokumendite menüü ikoon"\n' +
      "            />\n" +
      "            <p>Kodakondsus ja dokumendid</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/education.png"\n' +
      '              alt="Haridus ja teadus menüü ikoon"\n' +
      "            />\n" +
      "            <p>Haridus ja teadus</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/consumer.png"\n' +
      '              alt="Tarbijakatise menüü ikoon"\n' +
      "            />\n" +
      "            <p>Tarbijakaitse</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/money.png"\n' +
      '              alt="Raha ja omandi menüü ikoon"\n' +
      "            />\n" +
      "            <p>Raha ja omand</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/justice.png" alt="Õigusabi menüü ikoon" />\n' +
      "            <p>Õigusabi</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      '            <img src="../node_modules/veera-styles/assets/Icons/culture.png" alt="Kultuuri menüü ikoon" />\n' +
      "            <p>Kutluur, sport ja vaba aeg</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      "        <li>\n" +
      '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/home.png"\n' +
      '              alt="Eluase ja keskkond menüü ikoon"\n' +
      "            />\n" +
      "            <p>Eluase ja keskkond</p>\n" +
      "          </a>\n" +
      "        </li>\n" +
      '        <li id="test">\n' +
      "          <a\n" +
      '            href="#riigikaitseSubmenu"\n' +
      '            data-toggle="collapse"\n' +
      '            aria-expanded="false"\n' +
      '            aria-haspopup="”true”"\n' +
      '            class="firstLevel"\n' +
      "          >\n" +
      "            <img\n" +
      '              src="../node_modules/veera-styles/assets/Icons/security.png"\n' +
      '              alt="Turvalisus ja riigikaitse menüü ikoon"\n' +
      "            />\n" +
      "            <p>Turvalisus ja riigikaitse</p>\n" +
      "          </a>\n" +
      '          <ul class="collapse list-unstyled" id="riigikaitseSubmenu">\n' +
      "            <li>\n" +
      "              <a\n" +
      '                href="#turvalisuseSubmenu"\n' +
      '                data-toggle="collapse"\n' +
      '                aria-expanded="false"\n' +
      '                aria-haspopup="”true”"\n' +
      '                class="secondLevel"\n' +
      "                >Turvalisus\n" +
      "              </a>\n" +
      '              <ul class="collapse list-unstyled" id="turvalisuseSubmenu">\n' +
      "                <li>\n" +
      '                  <a href="#">Minu retseptid</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Ravikindlusts</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Arstiabi</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Arstiabi ja ravi välismaal</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Ajutine töövõimetus</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Haigushüvitise maksmine</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Püsiv töövõimetus</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Tervis reisil</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Vaktsineerimine</a>\n' +
      "                </li>\n" +
      "                <li>\n" +
      '                  <a href="#">Ravimite ohutus ja kõrvaltoimetest teatamine</a>\n' +
      "                </li>\n" +
      "              </ul>\n" +
      "            </li>\n" +
      "            <li>\n" +
      '              <a href="#">Ajateenistus</a>\n' +
      "            </li>\n" +
      "            <li>\n" +
      '              <a href="#">Reservteenistus</a>\n' +
      "            </li>\n" +
      "            <li>\n" +
      '              <a href="#">Vabatahtlike osalemine riigikaitses</a>\n' +
      "            </li>\n" +
      "            <li>\n" +
      '              <a href="#">Karjäär kaitseväes</a>\n' +
      "            </li>\n" +
      "          </ul>\n" +
      "        </li>\n" +
      "      </ul>\n" +
      "    </nav>\n" +
      "\n" +
      "    <!-- Page Content  -->\n" +
      '    <div id="content"></div>\n' +
      "  </div>\n" +
      "</div>\n"
  );
