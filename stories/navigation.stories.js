import { storiesOf } from '@storybook/html';


storiesOf('Navigation', module)
    .add('Over-8', () => '<div class="c-sidenav c-sidenav--over-8">\n' +
        '  <div class="wrapper ">\n' +
        '    <!-- Sidebar  -->\n' +
        '    <nav id="sidebar" class="sidebar-controller">\n' +
        '      <ul>\n' +
        '        <li>\n' +
        '          <a href="#" id="sidebarCollapse" class="sidenav-header">\n' +
        '            <img src="assets/Icons/menu_icon.png" alt="Ava menüü ikoon" />\n' +
        '            <img src="assets/Icons/X_Icon.png" alt="Sulge menüü ikoon" />\n' +
        '            <p>Kitsendan menüü</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img src="assets/Icons/home.png" alt="Avalehe menüü ikoon" />\n' +
        '            <p>Avaleht</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/country.png"\n' +
        '              alt="Eesti Vabariigi menüü ikoon"\n' +
        '            />\n' +
        '            <p>Eesti Vabariik</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a\n' +
        '            href="#tervisekaitseSubmenu"\n' +
        '            data-toggle="collapse" aria-expanded="false" aria-haspopup="”true”">\n' +
        '            <img src="assets/Icons/healthcare.png" alt="Tervis ja tervisekaitse menüü ikoon"/>\n' +
        '            <p>Tervis ja tervisekaitse</p>\n' +
        '          </a>\n' +
        '          <ul class="collapse list-unstyled" id="tervisekaitseSubmenu">\n' +
        '            <li>\n' +
        '              <a\n' +
        '                href="#page1Submenu"\n' +
        '                data-toggle="collapse"\n' +
        '                aria-expanded="false"\n' +
        '                aria-haspopup="”true”"\n' +
        '              >\n' +
        '                Tervishoid ja arstiabi\n' +
        '              </a>\n' +
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
        '              </ul>\n' +
        '            </li>\n' +
        '            <li>\n' +
        '              <a href="#">Toidu- ja tarbekaupade ohutus</a>\n' +
        '            </li>\n' +
        '            <li>\n' +
        '              <a href="#">Töötervishoid</a>\n' +
        '            </li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/grants.png"\n' +
        '              alt="Toetused, sotsiaalteenused ja pensioni andmete menüü ikoon"\n' +
        '            />\n' +
        '            <p>Toetused, sotsiaalteenused ja pensionid andmed</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img src="assets/Icons/family.png" alt="Perekonna menüü ikoon" />\n' +
        '            <p>Perekond</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img src="assets/Icons/work.png" alt="Töö menüü ikoon" />\n' +
        '            <p>Töö ja töösuhted</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/business.png"\n' +
        '              alt="Ettevõtluse menüü ikoon"\n' +
        '            />\n' +
        '            <p>Ettevõtlus</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/specialReq.png"\n' +
        '              alt="Erinõuetega tegevusalade menüü ikoon"\n' +
        '            />\n' +
        '            <p>Erinõuetega tegevusalad</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/disability.png"\n' +
        '              alt="Puudega inimesed menüü ikoon"\n' +
        '            />\n' +
        '            <p>Puudega inimesed</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/documents.png"\n' +
        '              alt="Kodakondsuse ja dokumendite menüü ikoon"\n' +
        '            />\n' +
        '            <p>Kodakondsus ja dokumendid</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/education.png"\n' +
        '              alt="Haridus ja teadus menüü ikoon"\n' +
        '            />\n' +
        '            <p>Haridus ja teadus</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/consumer.png"\n' +
        '              alt="Tarbijakatise menüü ikoon"\n' +
        '            />\n' +
        '            <p>Tarbijakaitse</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/money.png"\n' +
        '              alt="Raha ja omandi menüü ikoon"\n' +
        '            />\n' +
        '            <p>Raha ja omand</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img src="assets/Icons/justice.png" alt="Õigusabi menüü ikoon" />\n' +
        '            <p>Õigusabi</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img src="assets/Icons/culture.png" alt="Kultuuri menüü ikoon" />\n' +
        '            <p>Kutluur, sport ja vaba aeg</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li>\n' +
        '          <a href="#" data-toggle="collapse" aria-expanded="false">\n' +
        '            <img\n' +
        '              src="assets/Icons/home.png"\n' +
        '              alt="Eluase ja keskkond menüü ikoon"\n' +
        '            />\n' +
        '            <p>Eluase ja keskkond</p>\n' +
        '          </a>\n' +
        '        </li>\n' +
        '        <li id="test">\n' +
        '          <a\n' +
        '            href="#riigikaitseSubmenu"\n' +
        '            data-toggle="collapse"\n' +
        '            aria-expanded="false"\n' +
        '            aria-haspopup="”true”"\n' +
        '          >\n' +
        '            <img\n' +
        '              src="assets/Icons/security.png"\n' +
        '              alt="Turvalisus ja riigikaitse menüü ikoon"\n' +
        '            />\n' +
        '            <p>Turvalisus ja riigikaitse</p>\n' +
        '          </a>\n' +
        '          <ul class="collapse list-unstyled" id="riigikaitseSubmenu">\n' +
        '            <li>\n' +
        '              <a\n' +
        '                href="#turvalisuseSubmenu"\n' +
        '                data-toggle="collapse"\n' +
        '                aria-expanded="false"\n' +
        '                aria-haspopup="”true”"\n' +
        '                >Turvalisus\n' +
        '              </a>\n' +
        '              <ul class="collapse list-unstyled" id="turvalisuseSubmenu">\n' +
        '                <li>\n' +
        '                  <a href="#">Minu retseptid</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Ravikindlusts</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Arstiabi</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Arstiabi ja ravi välismaal</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Ajutine töövõimetus</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Haigushüvitise maksmine</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Püsiv töövõimetus</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Tervis reisil</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Vaktsineerimine</a>\n' +
        '                </li>\n' +
        '                <li>\n' +
        '                  <a href="#">Ravimite ohutus ja kõrvaltoimetest teatamine</a>\n' +
        '                </li>\n' +
        '              </ul>\n' +
        '            </li>\n' +
        '            <li>\n' +
        '              <a href="#">Ajateenistus</a>\n' +
        '            </li>\n' +
        '            <li>\n' +
        '              <a href="#">Reservteenistus</a>\n' +
        '            </li>\n' +
        '            <li>\n' +
        '              <a href="#">Vabatahtlike osalemine riigikaitses</a>\n' +
        '            </li>\n' +
        '            <li>\n' +
        '              <a href="#">Karjäär kaitseväes</a>\n' +
        '            </li>\n' +
        '          </ul>\n' +
        '        </li>\n' +
        '      </ul>\n' +
        '    </nav>\n' +
        '\n' +
        '    <!-- Page Content  -->\n' +
        '    <div id="content"></div>\n' +
        '  </div>\n' +
        '</div>\n')
    .add('Under-8', () => '')
    .add('Mobile', () => '');