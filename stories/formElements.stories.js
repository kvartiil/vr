import { storiesOf } from "@storybook/html";

storiesOf("FormElements", module)
  .add(
    "Radio buttons",
    () =>
      '<fieldset class="c-radio">\n' +
      "  <legend>Vali:</legend>\n" +
      "  <label>\n" +
      '    <input type="radio" name="valik" value="Pension, toetused" />\n' +
      "    <span>Pension, toetused</span>\n" +
      "  </label>\n" +
      "  <label >\n" +
      '    <input type="radio"  name="valik" value="Lapsed, pere" />\n' +
      "    <span>Lapsed, pere</span>\n" +
      "  </label>\n" +
      "  <label>\n" +
      '    <input type="radio" name="valik" value="Puue,hoolekanne" />\n' +
      "    <span>Puue, hoolekanne</span>\n" +
      "  </label>\n" +
      "</fieldset>"
  )
  .add(
    "Checkboxes",
    () =>
      '<fieldset class="c-checkbox">\n' +
      "  <legend>Accessible Checkboxes</legend>\n" +
      "  <div>\n" +
      '    <input type="checkbox" name="Checkboxes" id="checkbox1" value="Checkbox1" />\n' +
      '    <label for="checkbox1">Checkbox1</label>\n' +
      "  </div>\n" +
      "  <div>\n" +
      '    <input type="checkbox" name="Checkboxes" id="checkbox2" value="Checkbox2" />\n' +
      '    <label for="checkbox2">Checkbox2</label>\n' +
      "  </div>\n" +
      "</fieldset>\n"
  )
  .add(
    "Dropdown",
    () =>
      "<p>\n" +
      "  Vormivälja pealkiri\n" +
      '  <label class="c-dropdown">\n' +
      '    <select name="select" class="c-dropdown--small">\n' +
      '      <option value="">Sisesta</option>\n' +
      '      <option value="Roheline">Roheline</option>\n' +
      '      <option value="Kollane">Kollane</option>\n' +
      '      <option value="Punane">Punane</option>\n' +
      '      <option value="Sinine">Sinine</option>\n' +
      "    </select>\n" +
      "  </label>\n" +
      "</p>\n" +
      "\n" +
      "<p>\n" +
      "  Vormivälja pealkiri\n" +
      '  <label class="c-dropdown">\n' +
      '    <select name="select" class="c-dropdown--large">\n' +
      '      <option value="">Sisesta</option>\n' +
      '      <option value="Roheline">Roheline</option>\n' +
      '      <option value="Kollane">Kollane</option>\n' +
      '      <option value="Punane">Punane</option>\n' +
      '      <option value="Sinine">Sinine</option>\n' +
      "    </select>\n" +
      "  </label>\n" +
      "</p>\n"
  )
  .add(
    "Textfield",
    () =>
      '<form class="c-textfield-example-format">\n' +
      "    <div>\n" +
      '        <label for="text">Vormivälja pealkiri</label>\n' +
      '        <input type="text" class="c-textfield" name="väärtus" id="text" placeholder="Sisesta">\n' +
      "    </div>\n" +
      "    <div>\n" +
      '        <label for="disable">Vormivälja disabled</label>\n' +
      '        <input type="text" class="c-textfield" name="väärtus" id="disable" placeholder="Sisesta" disabled>\n' +
      "    </div>\n" +
      "    <div>\n" +
      '        <label for="focus">Vormivälja focus</label>\n' +
      '        <input type="text" class="c-textfield" name="väärtus" id="focus" placeholder="Click to focus">\n' +
      "    </div>\n" +
      "</form>\n"
  )
  .add(
    "Textarea",
    () =>
      '<label>Vormivälja pealkiri <textarea class="c-textarea" rows="3" placeholder="Sisesta"></textarea></label>\n'
  );
