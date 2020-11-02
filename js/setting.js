$(document).ready(function(){
	//Lang
	activeLang = 0;
	$(".langs").click(function(){
		if(activeLang == 0){
			$(".lang_b").addClass("height_show");
			activeLang = 1;
		} else {
			$(".lang_b").removeClass("height_show");
			activeLang = 0;
		}
	});
	$(".langs").hover(
		function(){
			$(".lang_b").addClass("height_show");
			activeLang = 1;
		},
		function(){
			$(".lang_b").removeClass("height_show");
			activeLang = 0;
		}
	);
	
	//Parallax
	if($(".scene").length){
		$(".scene").parallax({
			limitY: 0
		});
	}
	
	//Active nav
	$("#nav-lk a").each(function(){
		var location = window.location.href;
		var link = this.href;
		if(location == link){
			$(this).parent().addClass("active");
		}
	});
	
	//Track
	if($("#track").length){
		$("#track .name, #track .txt strong").text($("h1").text());
	}
	
	//Modal
	$(".modals").click(function(){
		$("#modal-" + $(this).data("body")).arcticmodal({
			overlay: {
				css: { opacity: .7 }
			}
		});
		//Back chromium
		$(".arcticmodal-overlay").text(".");
		//Login/Reg
		if(!$("#tabs li").eq($(this).data("id") - 1).hasClass("active")){
			$("#tabs li").removeClass("active");
			$("#tabs li").eq($(this).data("id") - 1).addClass("active");
			$("#tabs > div").removeClass("active");
			$("#tabs-" + $(this).data("id")).addClass("active");
		}
	});
	
	//Setting calculator
	var percent 	= [1, 	1.1, 	1.25, 	1.40, 	1.5];
	var minMoney 	= [10, 		300, 	1000, 	4500, 	10000];
	var maxMoney	= [299,		999, 	4499, 	9999, 	999999999999];
	var period		= [1, 		1, 		1, 		1, 		1];
	$("#money").val(1000);
	
	//Calculator
	function calc(){
		money = parseFloat($("#money").val());
		
		id = -1;
		var length = percent.length;
		var i = 0;
		do {
			if(minMoney[i] <= money && money <= maxMoney[i]){
				id = i;
				i = i + length;
			}
			i++
		}
		while(i < length)
		
		if(id != -1){
			profitDaily = money / 100 * percent[id] * period[id];
			profitDaily = profitDaily.toFixed(2);
			profitWeekly = profitDaily * 7;
			profitWeekly = profitWeekly.toFixed(2);
			profitMonthly = profitDaily * 30;
			profitMonthly = profitMonthly.toFixed(2);
			profitYearly = profitDaily * 365;
			profitYearly = profitYearly.toFixed(2);

			if(money < minMoney[id] || isNaN(money) == true){
				$("#profitDaily").text("Error!");
				$("#profitWeekly").text("Error!");
				$("#profitMonthly").text("Error!");
				$("#profitYearly").text("Error!");
			} else {
				$("#profitDaily").text("$" + profitDaily);
				$("#profitWeekly").text("$" + profitWeekly);
				$("#profitMonthly").text("$" + profitMonthly);
				$("#profitYearly").text("$" + profitYearly);
			}
		} else {
			$("#profitDaily").text("Error!");
			$("#profitWeekly").text("Error!");
			$("#profitMonthly").text("Error!");
			$("#profitYearly").text("Error!");
		}
	}
	if($("#money").length){
		calc();
	}
	$("#calculate").click(function(){
		calc();
	});
	
	
	//Tabs
	$(".tabs li").click(function(e){
		e.preventDefault();
		if(!$(this).hasClass("active")){
			href = $(this).find("a").attr("href");
			$(this).parent().siblings(".active").removeClass("active");
			$(href).addClass("active");
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
		}
	});
	
	//Rules
	$(".agree").click(function(){
		$(".reg .rules").show();
	});
	$(".back_reg").click(function(){
		$(".reg .rules").hide();
	});
	
	
	//Slider1
	if($(".slider1").length){
		$(".slider1").carouFredSel({
			scroll: { duration: 800 },
			auto: 6000,
			pagination: ".pager1"
		});
	}
	
	//Ñrypto info
	if($("#info").length){
		$.ajax({ 
			url: "/php/crypto.php",
			type: "POST",
			dataType: 'JSON',
			success: function(message){ 
				for (i in message){
					id = message[i]["id"];
					name = message[i]["name"];
					symbol = message[i]["symbol"];
					price_usd = message[i]["price_usd"];
					percent_change_24h = message[i]["percent_change_24h"];
					percent_change_7d = message[i]["percent_change_7d"];
					volume_usd_24h = message[i]["24h_volume_usd"];
					if(percent_change_24h < 0){ c1 = "txt_red"; } else { c1 = "txt_green"; }
					if(percent_change_7d < 0){ c2 = "txt_red"; } else { c2 = "txt_green"; }
					if(id == "bitcoin" || id == "ripple" || id == "ethereum" || id == "dash" || id == "ethereum-classic"){
						$("#info table").append('<tr>\
							<td><div class="name"><i class="crypto ' + id + '"></i>' + name + '</div></td>\
							<td>' + symbol + '</td>\
							<td>$' + price_usd +'</td>\
							<td><div class="' + c1 + '">' + percent_change_24h + '%</div></td>\
							<td><div class="' + c2 + '">' + percent_change_7d + '%</div></td>\
							<td>$' + volume_usd_24h + '</td>\
						</tr>');
					}
				}
			}
		});
	}
	
	
	//Ñrypto course lk
	if($("#course").length){
		$.ajax({ 
			url: "/php/crypto.php",
			type: "POST",
			dataType: 'JSON',
			success: function(message){
				for (i in message){
					id = message[i]["id"];
					symbol = message[i]["symbol"];
					price_usd = message[i]["price_usd"];
					percent_change_24h = message[i]["percent_change_24h"];
					if(percent_change_24h < 0){ c1 = "txt_red"; } else { c1 = "txt_green"; }
					if(id == "bitcoin" || id == "ripple" || id == "ethereum" || id == "dash" || id == "ethereum-classic"){
						$("#course .marquee").append('<div class="box blocks">\
							<i class="crypto ' + id + '"></i>\
							' + symbol + '..........$' + price_usd +'..........<span class="' + c1 + '">' + percent_change_24h + '%</span>\
						</div>');
					}
				}
				//Marquee
				$(".marquee").marquee({
					startVisible: true,
					delayBeforeStart: 0,
					duration: 50000,
					duplicated: true
				});
			}
		});
	}
	
	
	//Scroll
	$(".up").click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 1000);
	});
	
	//Digital Watch
	$.ajax({
		type: "POST",
		async: false,
		url: "/php/date.php",
		success: function(html){
			var res = html.match(/\d+/ig);
			dates = new Date(res[0], res[1]-1, res[2], res[3], res[4], res[5]);
		}
	});
	function digitalWatch() {
		dates.setSeconds(dates.getSeconds() + 1);
		day = dates.getDate();
		month = dates.getMonth() + 1;
		year = dates.getFullYear();
		hours = dates.getHours();
		minutes = dates.getMinutes();
		seconds = dates.getSeconds();
		
		if(hours > 11){
			txt = "PM";
		} else {
			txt = "AM";
		}
		if(hours > 12){
			hours = hours - 12;
		}
		
		if (day < 10) day = "0" + day;
		if (month < 10) month = "0" + month;
		if (year < 10) year = "0" + year;
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		$("#time, #time_lk").html(hours + ":" + minutes + ":" + seconds + " " + txt);
	}
	digitalWatch();
	setInterval(function(){ digitalWatch(); }, 1000);
	
	//ObjStatus
	function objStatus(obj, status, delay){
		setTimeout(function(){ obj.data("status", status); }, delay);
	}
	
	//Accordion
	$(".acc_head").click(function(event){
		if($(this).data("status") == 0 || $(this).data("status") == undefined){
			objStatus($(this), 1, 0);
			if(!$(this).hasClass("active")){
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
			$(this).next().slideToggle(400);
			objStatus($(this), 0, 400);
		}
	});
	
	//Copy
	if($(".copy").length){
		var clipboard = new Clipboard(".copy");
		clipboard.on('success', function(e) {
			if($(".promo").length){
				$(e.trigger).addClass("copied");
				setTimeout(function(){ $(e.trigger).removeClass("copied") }, 500);
			}
		});
	}

	//Gallery
	if($(".gallery").length){
		$(".gallery a").click(function(){
			$("body").css({ height: "auto" });
		});
		$(".gallery a").fancybox();
	}
	
	//Select
	if($(".select").length){
		$(".select select").each(function (i) {
			var SelectText = $(this).find("option:selected").text();
			$(this).parent().find(".int span").text(SelectText);
		});
		$(".select .int").show();
		$(".select select").css({ opacity: 0 });
		$(".select select").change(function(){
			var SelectText = $(this).find("option:selected").text();
			$(this).parent().find(".int span").text(SelectText);
			if($(this).val() != ""){
				$(this).parent().find(".int").removeClass("error");
			}
		});
	}

	//Checkbox
	if($(".checkbox").length){
		$(".checkbox input").css({ opacity: 0 });
		$(".checkbox input").change(function(){
			if($(this).prop("checked") == true) {
				$(this).parent(".checkbox").addClass("check_act");
			} else {
				$(this).parent(".checkbox").removeClass("check_act");
			}
		});
		$('.checkbox input[type="checkbox"]:checked').parent(".checkbox").addClass("check_act");
	}

	//Radio
	if($(".radio").length){
		$(".radio input").css({ opacity: 0 });
		$(".radio input").change(function(){
			name = $(this).attr("name");
			$('input[name="' + name + '"]').parent(".radio").removeClass("radio_act");
			$(this).parent(".radio").addClass("radio_act");
		});
		$('.radio input[type="radio"]:checked').parent(".radio").addClass("radio_act");
	}
	
	//Confirm img
	if($(".btc_form").length){
		$(".btc_form a").attr("id", "address");
	}
	
	//Timer
	if($(".countdown").length){
		$(".countdown").countdown({
			until: "15m",
			format: "MS",
			layout: '<div class="b1 blocks">\
						<div class="t1">{m10}{m1}</div>\
						<div class="t2">minutes</div>\
					</div><!--\
				/--><div class="b2 blocks">\
						<div class="t1">:</div>\
					</div><!--\
				/--><div class="b3 blocks">\
						<div class="t1">{s10}{s1}</div>\
						<div class="t2">Seconds</div>\
					</div>'
		});
	}
	
	//Other
	if($(".other").length){
		$(".deposit-process").addClass("btn btn_red");
		$(".deposit-cancel").addClass("btn");
	}
	
	//Radio reinvest
	if($("#reinvest .radio").length){
		$("#reinvest .radio input").change(function(){
			name = $(this).attr("name");
			$('input[name="' + name + '"]').parent().parent().removeClass("active");
			$(this).parent().parent().addClass("active");
		});
		$('#reinvest .radio input[type="radio"]:checked').parent().parent().addClass("active");
	}
	
	//Radio exchange
	if($("#exchange .radio").length){
		$("#exchange .radio input").change(function(){
			name = $(this).attr("name");
			$('input[name="' + name + '"]').parent().parent().parent().removeClass("active");
			$(this).parent().parent().parent().addClass("active");
		});
		$('#exchange .radio input[type="radio"]:checked').parent().parent().parent().addClass("active");
	}
	
	//function send form
	function send_form(){
		$.ajax({
			type: "POST",
			async: false,
			url: "/php/mail.php",
			data: $(".form_v").serializeArray(),
			success: function(html) {
				$(".result").html(html);
				$(".form_v").trigger("reset");
			}
		});
	}
	
	//Form
	if($(".form_v").length){
		$(".form_v").validate({
			rules:{
				url: { required: true, url: true }
			},
			messages:{
				url: { required: '', url: '' }
			},
			submitHandler: function() {
				send_form();
			}
		});
	}
	
	//Form repres
	if($(".form_v_repres").length){
		$(".form_v_repres").validate({
			rules:{
				facebook: { url: true },
				twitter: { url: true },
				blog: { url: true },
				country: { required: true },
				language: { required: true },
				phone: { required: true },
				timing: { required: true }
			},
			messages:{
				facebook: { url: '' },
				twitter: { url: '' },
				blog: { url: '' },
				country: { required: function(){ $("#country").parent().find(".int").addClass("error"); } },
				language: { required: '' },
				phone: { required: '' },
				timing: { required: '' }
			},
			submitHandler: function(form) {
				regExp = /https*:\/{2}w*.*[a-zA-Z0-9]*.*[a-zA-Z0-9]+.[a-zA-Z0-9]+\//gim;
				if($("#facebook_r").val() == ""){
					$("#facebook_r").val("NO");
				} else {
					$("#facebook_r").val($("#facebook_r").val().replace(regExp,''));
				}
				if($("#twitter_r").val() == ""){
					$("#twitter_r").val("NO");
				} else {
					$("#twitter_r").val($("#twitter_r").val().replace(regExp,''));
				}
				if($("#skype_r").val() == ""){
					$("#skype_r").val("NO");
				}
				if($("#blog_r").val() == ""){
					$("#blog_r").val("NO");
				}
				$(form).ajaxSubmit();
			}
		});
	}
	
	//Total_market_cap
	if($("#total_market_cap").length){
		$.ajax({ 
			url: "/php/total_market_cap.php",
			type: "POST",
			dataType: 'JSON',
			success: function(message){
				total_market_cap = message["total_market_cap_usd"].toString();
				total_market_cap = total_market_cap.split(/(?=(?:\d{3})+$)/);
				$("#total_market_cap").text("$" + total_market_cap);
			}
		});
	}
});