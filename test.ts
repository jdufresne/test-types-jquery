import $ from "jquery";

const $oldDiv = $("#my-div");
const $newDiv = $('<div id="my-div"></div>');
$oldDiv.replaceWith($newDiv);
