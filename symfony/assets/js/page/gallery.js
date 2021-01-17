import '../bootstrap.js';
import $ from 'jquery';
import 'lightgallery';
import 'lg-fullscreen';
import 'lg-thumbnail';
import 'lightgallery/dist/css/lightgallery.css';

$(document).ready(() => {
    $("#gallery").lightGallery({
        selector: '.item'
    });
});