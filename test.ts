import $ from "jquery";

const $oldDiv = $("#my-div");
const $newForm = $('<div id="my-div"></div>');
$oldDiv.replaceWith($newForm);
