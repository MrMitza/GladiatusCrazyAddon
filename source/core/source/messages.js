/*
 * Addon Messages Script
 * Author: DarkThanos, GreatApo
 */

// Messages
var gca_messages = {
	// Pre Inject code
	preinject : function(){
		// Messages
		if(gca_section.submod == 'messageShow' || gca_section.submod == 'messageMoveDelete'){
			// Check if style is active
			if(gca_options.bool("messages","messages_layout"))
				// Add class tag
				document.documentElement.className += " gca_messages_styling";
		}
	},

	// Inject Code
	inject : function(){
		// Messages
		if(gca_section.submod == 'messageShow' || gca_section.submod == 'messageMoveDelete'){
			
			// Parse messages
			this.messages.resolve();

			// Messages layout improve
			(gca_options.bool("messages", "messages_layout") && 
				this.layout.improve());

			// Unread messages
			(gca_options.bool("messages", "show_unread") &&
				this.unread.show());

			// Pagination layout
			(gca_options.bool("global", "pagination_layout") && 
				this.pagination());

			// Separate days
			(gca_options.bool("messages", "separate_days") && 
				this.separator.days());

			// Send message box
			(gca_options.bool("messages", "send_message_box") && // TODO : Send message
				this.send_message.create());

			// Guild message player info
			(gca_options.bool("messages", "messages_layout") && 
			 gca_options.bool("messages", "more_guild_mate_info") && 
				this.guild_message.more_info());

			// Guild message parse links
			(gca_options.bool("messages", "show_message_links") &&
				this.guild_message.display_links());

			// Guild battle more info
			(gca_options.bool("messages", "get_guild_battle_info") &&
				this.guild_battle.more_info());

			// Sidebar
			(gca_options.bool("messages", "show_sidebar") &&
				this.sidebar.inject());

			// Header links fix
			(gca_options.bool("messages", "fix_header_links") &&
				this.fix.headerLinks());
		}
	},


	// Resolve messages
	messages : {

		// Message list
		list : [],
		// Messages by type
		type : {
			// Unknowned messages
			"other" : [],

			// Messages
			"personal" : [],
			"guild" : [],

			// News
			"news" : [],
			"guild_battle" : []
		},

		// Resolve
		resolve : function(){
			// If no messages
			if(document.getElementById('content').getElementsByTagName('form').length == 0)
				return;

			// Get messages
			var messages = document.getElementById("content").getElementsByTagName('form')[0].getElementsByClassName("message_box");

			// Parse messages
			var msg;
			for(var i = 0; i < messages.length; i++){
				// Parse message
				msg = this.parseMessage(messages[i]);
				// Insert it in all list
				this.list.push(msg);
				// Insert it in type list
				this.type[msg.type].push(msg);
			}
		},

		// Parse message
		parseMessage : function(element){
			// Message Object
			var message = {
				image : element.getElementsByClassName("message_icon")[0].style.backgroundImage,
				title : element.getElementsByClassName("message_title")[0],
				date : element.getElementsByClassName("message_date")[0],
				body : element.getElementsByClassName("message_text")[0],
				element : element,
				type : "other"
			};

			// Personal message
			if(message.image.match("messages.gif")){
				message.type = "personal";
			}

			// Guild message
			else if(message.image.match(/\d+-\d+\.png/)){
				message.type = "guild";
			}

			// Gladiatus notification
			else if(message.image.match("icon_7.gif")){
				
				// Guild attack
				if(element.getElementsByTagName('a').length > 0 && element.getElementsByTagName('a')[0].href.match("guild_warcamp")){
					message.type = "guild_battle";
				}

				// Auction item won
				// The anounsment has the same title and body
				else if(message.title.textContent == message.body.textContent){
					message.type = "news";
				}

				// Auction item lost
				// The body has 2x "
				else if(message.body.textContent.split('"').length - 1 == 2){
					message.type = "news";
				}
				
				// Other
				else{
					message.type = "news";
				}
			}

			return message;
		},

		// Get date from message
		parseDate : function(message){
			var date = message.date.textContent.match(/(\d+)\.(\d+)\.(\d+)/i);
			var time = message.date.textContent.match(/(\d+):(\d+):(\d+)/i);
			return {
				day : date[0],
				month : date[1],
				year : date[2],

				hour : time[0],
				minites : time[1],
				seconds : time[2]
			};
		}

	},


	// Layout
	layout : {

		// Improve interface
		improve : function(){
			// List
			var messages = gca_messages.messages.list;
			// For each message
			for(var i = 0; i < messages.length; i++){
				// Apply interface
				this.apply(messages[i]);
			}
		},

		// Apply on message
		apply : function(message){
			// Find type
			switch(message.type){
				// Messages
				case "personal":
					this.template.personal(message);
					break;
				case "guild":
					this.template.guild(message);
					break;

				// News
				case "news":
					this.template.news(message);
					break;
				case "guild_battle":
					this.template.guild_battle(message);
					break;

				// Unknowned messages
				case "other":
					break;
			}
		},

		// Per Type edit
		template : {

			// Personal message
			personal : function(message){
				// Personal message
				message.element.className += " gca_messages_personal";

				// Create table
				var layout = document.createElement("div");
				layout.className = "gca_messages_personal_table";
				var table = document.createElement("table");
				table.setAttribute("cellspacing","0");
				table.setAttribute("cellpadding","0");
				var tr = document.createElement("tr");
				var td = document.createElement("td");
				td.className = "scroll_top_left";
				tr.appendChild(td);
				td = document.createElement("td");
				td.className = "scroll_top_center";
				tr.appendChild(td);
				td = document.createElement("td");
				td.className = "scroll_top_right";
				tr.appendChild(td);
				table.appendChild(tr);
				tr = document.createElement("tr");
				td = document.createElement("td");
				td.className = "scroll_body_left";
				tr.appendChild(td);
				var body = document.createElement("td");
				body.className = "scroll_body_center";
				tr.appendChild(body);
				td = document.createElement("td");
				td.className = "scroll_body_right";
				tr.appendChild(td);
				table.appendChild(tr);
				tr = document.createElement("tr");
				td = document.createElement("td");
				td.className = "scroll_bottom_left";
				tr.appendChild(td);
				td = document.createElement("td");
				td.className = "scroll_bottom_center";
				tr.appendChild(td);
				td = document.createElement("td");
				td.className = "scroll_bottom_right";
				tr.appendChild(td);
				table.appendChild(tr);
				layout.appendChild(table);

				// Message Content
				var content = message.body.parentNode;

				// Insert Message
				body.appendChild(message.body);
				content.insertBefore(layout, content.firstChild);
			},
			
			// Guild message
			guild : function(message){
				
			},

			// General News
			news : function(message){
				// News message
				message.element.className += " gca_messages_other_news";
			},

			// Guild Battle report
			guild_battle : function(message){
				// Guild Report message
				message.element.className += " gca_messages_guild_report";

				// Change icon
				var icon = message.element.getElementsByClassName("message_icon")[0];
				icon.style.backgroundImage = icon.style.backgroundImage.replace("icon_7.gif", "icon_4.gif");
			}
		}

	},


	// Unread messages
	unread : {

		// Last readed
		last : 0,

		// Show unread messages
		show : function(){
			// Load last message
			this.last = gca_data.section.get("messages", 'last_read_message', 0);

			// List
			var messages = gca_messages.messages.list;

			// If messages
			if(messages.length > 0){
				// Get the id of the first message
				let first_id = this.getId(messages[0]);
				// If new message save it's id
				if(first_id > this.last)
					gca_data.section.set("messages", 'last_read_message', first_id);
			}

			// For each message
			for(var i = 0; i < messages.length; i++){
				// Check if unread
				this.checkMessage(messages[i]);
			}
		},

		// Check message
		checkMessage : function(message){
			// If unread message
			if(this.getId(message) > this.last)
				// Hilight unread message
				message.element.className += " gca_messages_unread_message";
		},

		// Get message id
		getId : function(message){
			// Return message id
			return (message.element.getElementsByClassName("message_box_icon")[0].getElementsByTagName("input")[0].value * 1);
		}

	},


	// Guild message functions
	guild_message : {

		// Guild mates
		mates : {},

		// Load
		more_info : function(){
			// If no guild
			if(!gca_data.section.get("guild", "inGuild", false))
				return;

			// List
			var messages = gca_messages.messages.type.guild;

			// If no messages
			if(messages.length == 0)
				return;

			// Load guild mates
			var mates = gca_data.section.get("guild", "mates", []);
			for(var i = mates.length - 1; i >= 0; i--){
				this.mates[mates[i].id] = mates[i];
			}

			// For each message
			for(var i = 0; i < messages.length; i++){
				// Load battle
				this.load_info(messages[i]);
			}
		},

		// Load info
		load_info : function(message){
			// Get player id
			var id = message.title.getElementsByTagName('a')[0].href.match(/&p=(\d+)/i)[1];
			// Get player info
			var mate = this.mates[id];

			// If player in list
			if(mate){
				// Insert more info
				var info = document.createElement("span");
				info.textContent = "[ lv" + mate.level + " - " + mate.rank + " ]";
				message.title.appendChild(info);
			}
		},


		// Display links
		display_links : function(){
			// List
			var messages = gca_messages.messages.type.guild;
			// For each message
			for(var i = 0; i < messages.length; i++){
				// Load battle
				this.parse_links(messages[i]);
			}
		},

		// Parse links
		parse_links : function(message){
			// Match links
			var links = message.body.textContent.match(/(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g);

			// If no links found return
			if(!links)
				return;

			// Create links box
			var wrapper = document.createElement("div");
			wrapper.className = "message_text gca_message_links";

			// Create links
			var a;
			for(var i = 0; i < links.length; i++){
				a = document.createElement("a");
				a.href = links[i];
				a.setAttribute("target", "_blank");
				a.setAttribute("rel", "noreferrer");
				a.textContent = links[i];
				wrapper.appendChild(a);
				wrapper.appendChild(document.createElement("br"));
			}

			// Add box on message
			message.body.parentNode.appendChild(wrapper);
		}

	},


	// Guild battle functions
	guild_battle : {

		// Load
		more_info : function(){
			// List
			var messages = gca_messages.messages.type.guild_battle;
			// For each message
			for(var i = 0; i < messages.length; i++){
				// Load battle
				this.load_battle(messages[i]);
			}
		},

		// Load more
		load_battle : function(message){
			// Guild Report message
			if(!message.element.className.match("gca_messages_guild_report"))
				message.element.className += " gca_messages_guild_report";

			// Loading
			var loading = document.createElement("div");
			loading.className = "loading";
			message.body.appendChild(loading);

			// Create new message layout
			var layout = document.createElement("div");
			// Header title div
			var header = document.createElement("div");
			header.className = "gca_messages_guild_report_title";
			layout.appendChild(header);
			// Guild flags div
			var guilds = document.createElement("div");
			guilds.className = "gca_messages_guild_report_main";
			layout.appendChild(guilds);
			// Description Div
			var description = document.createElement("div");
			description.className = "gca_messages_guild_report_decription";
			layout.appendChild(description);
			// Results
			var resultsDiv = document.createElement("div");
			resultsDiv.className = "gca_messages_guild_report_results";
			layout.appendChild(resultsDiv);
			// Place link on message title
			var link = message.body.getElementsByTagName("a")[0];
			message.title.appendChild(link);
			// Insert new layout on the message
			layout.style.display = "none";
			message.body.appendChild(layout);

			// Attacker guild
			var guildA = {};
			var div = document.createElement("div");
			div.className = "gca_messages_guild_report_left";
			guildA.name = document.createElement("div");
			guildA.name.className = "gca_messages_guild_report_name";
			div.appendChild(guildA.name);
			guildA.imgDiv = document.createElement("div");
			guildA.imgDiv.className = "gca_messages_guild_report_divimage";
			guildA.img = document.createElement("img");
			guildA.imgDiv.appendChild(guildA.img);
			div.appendChild(guildA.imgDiv);
			guilds.appendChild(div);

			// Defender guild
			var guildB = {};
			div = document.createElement("div");
			div.className = "gca_messages_guild_report_right";
			guildB.name = document.createElement("div");
			guildB.name.className = "gca_messages_guild_report_name";
			div.appendChild(guildB.name);
			guildB.imgDiv = document.createElement("div");
			guildB.imgDiv.className = "gca_messages_guild_report_divimage";
			guildB.img = document.createElement("img");
			guildB.imgDiv.appendChild(guildB.img);
			div.appendChild(guildB.imgDiv);
			guilds.appendChild(div);

			// VS
			div = document.createElement("div");
			div.className = "gca_messages_guild_report_vs";
			div.textContent = "VS";
			guilds.appendChild(div);
			
			// Get more info
			jQuery.get(link.href, function(data){
				// Get Winner
				var winner = data.match(/<div\s*id="reportHeader"\s*class="([^"]+)">([^<]+)<\/div>/i);
				// Get Guilds
				var guilds = data.match(/<span\s*class="guildname">([^<]+)<\/span>\s*<\/div>\s*<img\s*alt="[^"]+"\s*src="[^"]+"\s*border="0"\s*\/>/gm);
				// Get description
				var battleInfo = data.match(/<div\s+class="section-header">\s*([^<]+)<img\s+src="([^"]+)"\s+alt="([^"]+)"\s+title="([^"]+)"[^>]+>[^<]*(<a\s+alt="[^"]+"\s+title="[^"]+"\s+href="index\.php\?mod=guild_warcamp&submod=guild_combat&gid=\d+&sh=[^"]+"[^>]*>\s*<img[^>]+>\s*<\/a>|)\s*<br[^>]*>\s*<\/div>/im);

				// Results
				var results = data.match(/<th[^>]*>(\d+)<\/th>\s*<th[^>]*><a\s+href="index\.php\?mod=guild&i=(\d+)&sh=[^"]+"\s+target="_self">([^<]+)<\/a><\/th>\s*<th[^>]*><\/th>\s*<th[^>]*><\/th>\s*<th[^>]*><a\s+href="index\.php\?mod=guild&i=(\d+)&sh=[^"]+"\s+target="_self">([^<]+)<\/a><\/th>\s*<th[^>]*>(\d+)<\/th>/im);

				// If data was loaded with no problem
				if(winner != null && results != null && guilds.length == 2){
					// Display layout
					layout.style.display = "block";
					loading.style.display = "none";

					// Display winner
					header.appendChild(document.createTextNode(winner[2]));
					header.className += " " + winner[1];
					// Parse guilds' info
					var guild_A = guilds[0].match(/<span\s*class="guildname">([^<]+)<\/span>\s*<\/div>\s*<img\s*alt="[^"]+"\s*src="([^"]+)"\s*border="0"\s*\/>/im);
					var guild_B = guilds[1].match(/<span\s*class="guildname">([^<]+)<\/span>\s*<\/div>\s*<img\s*alt="[^"]+"\s*src="([^"]+)"\s*border="0"\s*\/>/im);

					// Display Attacker Guild
					guildA.name.appendChild(document.createTextNode(guild_A[1]));
					guildA.img.setAttribute("src", guild_A[2]);
					// Display Defender Guild
					guildB.name.appendChild(document.createTextNode(guild_B[1]));
					guildB.img.setAttribute("src", guild_B[2]);

					// Build description
					if(battleInfo != null){
						var img = document.createElement("img");
						img.setAttribute("src", battleInfo[2]);
						img.setAttribute("alt", battleInfo[3]);
						img.setAttribute("title", battleInfo[4]);
						img.setAttribute("align", "absmiddle");
						img.setAttribute("border", "0");
						description.appendChild(document.createTextNode(battleInfo[1]));
						description.appendChild(img);
					}

					// Build results
					var table, tr, td, link;
					table = document.createElement("table");
					tr = document.createElement("tr");
					td = document.createElement("td");
					td.className = "battles_results battles_results_left";
					td.textContent = "(" + results[1] + ")";
					tr.appendChild(td);
					td = document.createElement("td");
					td.className = "battles_results_left";
					link = document.createElement("a");
					link.href = gca_getPage.link({"mod":"guild", "submod":"forumGladiatorius", "i":results[2]});
					link.textContent = results[3];
					td.appendChild(link);
					tr.appendChild(td);
					td = document.createElement("td");
					tr.appendChild(td);
					td = document.createElement("td");
					td.className = "battles_results_right";
					link = document.createElement("a");
					link.href = gca_getPage.link({"mod":"guild", "submod":"forumGladiatorius", "i":results[4]});
					link.textContent = results[5];
					td.appendChild(link);
					tr.appendChild(td);
					td = document.createElement("td");
					td.className = "battles_results battles_results_right";
					td.textContent = "(" + results[6] + ")";
					tr.appendChild(td);
					table.appendChild(tr);
					resultsDiv.appendChild(table);
				}
				else{
					loading.style.backgroundImage = "none";
					loading.appendChild(document.createTextNode(gca_locale.get("error")));
				}
			});
		}

	},


	// Sidebar
	sidebar : {
		
		// Sidebar element
		element : null,

		// Inject
		inject : function(){
			// Create sidebar
			this.element = document.createElement("div");
			this.element.className = "gca_messages_sidebar";
			// Insert on page
			var content = document.getElementById("content");
			content.insertBefore(this.element, content.firstChild);

			// Create Icons
			this.createIcons();
		},

		// Create Icons
		createIcons : function(){
			// Personal
			if(gca_messages.messages.type.personal.length){
				let icon = this.addIcon({
					backgroundImage : "url(img/interface_ar/messages.gif)"
				}, gca_messages.messages.type.personal.length, this.handleClick);
				icon.cur = -1;
				icon.list = gca_messages.messages.type.personal;
			}

			// Guild
			if(gca_messages.messages.type.guild.length){
				let img = gca_messages.messages.type.guild[0].element.getElementsByClassName("message_icon")[0].style.backgroundImage;
				let icon = this.addIcon({
					backgroundImage : img,
					backgroundSize : "100% 111%"
				}, gca_messages.messages.type.guild.length, this.handleClick);
				icon.cur = -1;
				icon.list = gca_messages.messages.type.guild;
			}

			// News
			if(gca_messages.messages.type.news.length){
				let icon = this.addIcon({
					backgroundImage : "url(img/news/icon_7.gif)"
				}, gca_messages.messages.type.news.length, this.handleClick);
				icon.cur = -1;
				icon.list = gca_messages.messages.type.news;
			}

			// Guild Battle
			if(gca_messages.messages.type.guild_battle.length){
				let icon = this.addIcon({
					backgroundImage : "url(img/news/icon_4.gif)"
				}, gca_messages.messages.type.guild_battle.length, this.handleClick);
				icon.cur = -1;
				icon.list = gca_messages.messages.type.guild_battle;
			}
		},

		// Handle click
		handleClick : function(obj){
			// Next message
			obj.cur ++;
			// If end go to start
			if(obj.list.length <= obj.cur)
				obj.cur = 0;
			// Scroll to message
			jQuery('html, body').animate({
				scrollTop: jQuery(obj.list[obj.cur].element).offset().top - 30
			}, 200);
		},

		// Add icon
		addIcon : function(icon, text, callback){
			// Icon Wrapper
			var wrapper = document.createElement("div");
			wrapper.className = "gca_messages_sidebar_icon_wrapper";
			// Text
			var text_element = document.createElement("div");
			text_element.className = "gca_messages_sidebar_text";
			text_element.textContent = text;
			// Icon
			var icon_element = document.createElement("div");
			icon_element.className = "gca_messages_sidebar_icon";
			for(css in icon){
				icon_element.style[css] = icon[css];
			}

			// Object
			var object = {
				element : wrapper,
				content : text_element,
				icon : icon_element
			};

			// If callback
			if(callback){
				// Add cursor pointer
				icon_element.style.cursor = "pointer";
				// If function
				if(typeof(callback) == "function"){
					icon_element.addEventListener('click',function(){
						callback(object);
					}, false);
				}
			}

			// Insert on page
			wrapper.appendChild(text_element);
			wrapper.appendChild(icon_element);
			this.element.appendChild(wrapper);

			// Return icon
			return object;
		}

	},


	// Pagination
	pagination : function(){
		// Get pagings
		var pagings = document.getElementsByClassName("paging");
		// Parse each
		for(var i = pagings.length - 1; i >= 0; i--){
			gca_tools.pagination.parse(pagings[i]);
		}
	},


	// Separator
	separator : {
		
		// Separate days
		days : function(){
			// List
			var messages = gca_messages.messages.list;
			// If messages
			if(messages.length > 1){
				// Get previus date
				var prev_date = gca_messages.messages.parseDate(messages[0]).day;
				// Next date variable
				var next_date;

				// For each message
				for(var i = 1; i < messages.length; i++){
					// Get date
					next_date = gca_messages.messages.parseDate(messages[i]).day;
					// If new date
					if(next_date != prev_date){
						// Add separator
						this.add(messages[i], next_date);
						// Set new date
						prev_date = next_date;
					}
				}
			}
		},

		// Add a separator
		add : function(message, title){
			// Create
			var separator = document.createElement("div");
			separator.className = "message_box gca_messages_separator";
			// Set title
			separator.textContent = title;
			// Add on page
			message.element.parentNode.insertBefore(separator, message.element);
			// Return element
			return separator;
		}

	},


	// Fixes functions
	fix : {

		// Fix messages header links
		headerLinks : function(){
			// List
			var messages = gca_messages.messages.list;

			var links;
			// For each message
			for(var i = 0; i < messages.length; i++){
				links = messages[i].title.getElementsByTagName('a');
				// If header link
				if(links.length){
					// Fix header link
					this.headerLink(links);
				}
			}
		},

		// Fix message header links
		headerLink : function(links){
			// Fix link click close message
			for (var i = links.length - 1; i >= 0; i--) {
				links[i].addEventListener('click', function(e){
					e.stopPropagation();
				}, true);
			}
		}

	},


	// Send message box
	send_message : {

		// Create box
		create : function(){

		}

	}

};

(function(){
	// Pre Inject
	gca_messages.preinject();
	// On page load
	var loaded = false;
	var fireLoadEvent = function(){
		if(loaded) return;
		loaded = true;
		// Call handler
		gca_messages.inject();
	}
	if(document.readyState == "complete" || document.readyState == "loaded"){
		fireLoadEvent();
	}else{
		window.addEventListener('DOMContentLoaded', function(){
			fireLoadEvent();
		}, true);
		window.addEventListener('load', function(){
			fireLoadEvent();
		}, true);
	}
})();
