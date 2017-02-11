$(function() {
	"use strict";
	var o = $(window),
		c = $(".loading"),
		n = $("body"),
		s = $(".large-header"),
		l = $("#nav"),
		r = $("#nav a");
	o.on("load", function() {
		c.fadeOut(), n.css({
			overflow: "visible"
		}), s.css({
			display: "block"
		})
	}), o.on("scroll", function() {
		o.scrollTop() > 280 ? l.addClass("scroll") : l.removeClass("scroll")
	}), r.on("click", function() {
		"none" !== $(".navbar-toggle").css("display") && $(".navbar-toggle").trigger("click")
	}), o.on("scroll", function(o) {
		var c = $(document).scrollTop(),
			n = $(".nav li a");
		n.each(function() {
			var o = $(this),
				s = $(o.attr("href"));
			s.position().top <= c + 100 && s.position().top + s.height() > c ? (n.removeClass("active").blur(), o.addClass("active")) : o.removeClass("active")
		})
	}), (new WOW).init(), $(".option").on("click", function() {
		$(".box").toggleClass("open")
	}), $("body").on("click", function(o) {
		$(o.target).closest(".box").length || $(".box").removeClass("open")
	}), $(".green").on("click", function() {
		$("#color").attr("href", "control/css/green.css")
	}), $(".blue").on("click", function() {
		$("#color").attr("href", "control/css/blue.css")
	}), $(".orange").on("click", function() {
		$("#color").attr("href", "control/css/orange.css")
	}), $(".purple").on("click", function() {
		$("#color").attr("href", "control/css/purple.css")
	}), $(".crimson").on("click", function() {
		$("#color").attr("href", "control/css/crimson.css")
	})
});