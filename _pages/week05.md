---
layout: page
title: Week Five
subtitle: What is Writing?
description: Fill out later
background: '/img/posts/07.jpg'
---
<!-- Lightbox usage markup -->
<h1>Pure CSS Lightbox</h1>
<p>Click the thumbnail below to activate the lightbox</p>

<!-- thumbnail image wrapped in a link -->
<a href="#img1">
  <img src="/img/posts/NCBG_Notary.jpg" class="thumbnail" style="width:200px;">
</a>

<!-- lightbox container hidden with CSS -->
<a href="#_" class="lightbox" id="img1">
  <img src="/img/posts/NCBG_Notary.jpg">
</a>

<p class="italic small">Image credit: Me</p>

---
<button class="accordion"><h1>Monday</button>
<div class="panel">
  <p><h2>Introduction to the course<h2><p>
  <p>No assigned readings</p>
</div>

<button class="accordion1"><h1>Wednesday</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion2"><h1>Friday</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>
<script>
var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>
<script>
var acc = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>

</body>

<div class="container">
  <div class="row">
    <div class="col-lg-8 col-md-10 mx-auto">

      {{ content }}

    </div>
  </div>
</div>
