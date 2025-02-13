/*
 * Addon Settings Script
 * Author: DarkThanos, GreatApo
 */

var gca_settings = {
	preinject : function(){
		// If gca settings
		(gca_section.gcamod == "settings" && 
			this.options.preinject.hideContent());
	},

	inject : function(){
		// Get Scheme
		this.options.parseScheme();

		// Create Options
		this.options.createBox();

		// If gca settings
		if(gca_section.gcamod == "settings"){
			this.options.open();
			this.options.preinject.showContent();
		}
	},

	// Options
	options : {
		urls : {
			bug_report : 'https://github.com/DinoDevs/GladiatusCrazyAddon/issues/new?template=bug.md',
			idea_request : 'https://github.com/DinoDevs/GladiatusCrazyAddon/issues/new?template=feature-request.md',
			translate_addon : 'https://github.com/DinoDevs/GladiatusCrazyAddon/blob/master/documentation/translators/README.md',

			github_link : 'https://github.com/DinoDevs/GladiatusCrazyAddon/issues',
			facebook_link : 'https://www.facebook.com/GladiatusCrazyAddOn/',
			donation_link : 'https://paypal.me/gcadonation/5'
		},

		// Create box on settings
		createBox : function(){
			// GCA Box
			var wrapper = document.createElement("div");
			wrapper.id = "addon_box";
			var title = document.createElement("h2");
			title.className = "section-header";
			title.textContent = gca.name + " - v" + gca.version;
			wrapper.appendChild(title);
			var section = document.createElement("section");
			section.style.display = "block";
			wrapper.appendChild(section);
			document.getElementById("content").appendChild(wrapper);

			var box;
			box = document.createElement("div");
			this.createBox_description(box);
			section.appendChild(box);
			section.appendChild(document.createElement("hr"));
			box = document.createElement("div");
			this.createBox_settings(box);
			section.appendChild(box);
		},

		createBox_description : function(box) {
			box.className = "info_box";

			// Subtitle
			let suptitle = document.createElement("div");
			suptitle.textContent = "Making gladiatus great since 2010!";
			box.appendChild(suptitle);

			// Create letter
			let letter = document.createElement("div");
			letter.style.padding = "10px 30px 10px 20px";

			let p, icon, a;

			// Letter start
			let start = document.createElement("div");
			start.appendChild(document.createTextNode("Ave Gladiator,"));

			// Letter body
			let body = document.createElement("div");
			body.style.marginLeft = "40px";
			body.style.paddingTop = "10px";
			body.style.textAlign = "justify";
			body.style.textJustify = "inter-word";

			p = document.createElement("div");
			p.style.paddingBottom = "10px";
			p.appendChild(document.createTextNode("Thank you for using Gladiatus Crazy Addon."));
			body.appendChild(p);

			p = document.createElement("div");
			p.style.paddingBottom = "10px";
			p.appendChild(document.createTextNode("If you find a "));
			icon = document.createElement("div");
			icon.className = "gca_windows_icon gca_windows_icon-bug";
			p.appendChild(icon);
			p.appendChild(document.createTextNode(" "));
			a = document.createElement("a");
			a.setAttribute("href", this.urls.bug_report);
			a.setAttribute("target", "_blank");
			a.setAttribute("rel", "noreferrer");
			a.style.color = "#b50604";
			a.style.textDecoration = "underline";
			a.textContent = "bug";
			p.appendChild(a);
			p.appendChild(document.createTextNode(" or you have a nice "));
			icon = document.createElement("div");
			icon.className = "gca_windows_icon gca_windows_icon-idea";
			p.appendChild(icon);
			p.appendChild(document.createTextNode(" "));
			a = document.createElement("a");
			a.setAttribute("href", this.urls.idea_request);
			a.setAttribute("target", "_blank");
			a.setAttribute("rel", "noreferrer");
			a.style.color = "#545454";
			a.style.textDecoration = "underline";
			a.textContent = "idea";
			p.appendChild(a);
			p.appendChild(document.createTextNode(" for a new feature, you can open an issue on our "));
			icon = document.createElement("div");
			icon.className = "gca_windows_icon gca_windows_icon-github";
			p.appendChild(icon);
			p.appendChild(document.createTextNode(" "));
			a = document.createElement("a");
			a.setAttribute("href", this.urls.github_link);
			a.setAttribute("target", "_blank");
			a.setAttribute("rel", "noreferrer");
			a.style.color = "#000";
			a.style.textDecoration = "underline";
			a.textContent = "Github page";
			p.appendChild(a);
			p.appendChild(document.createTextNode(" or send us a "));
			icon = document.createElement("div");
			icon.className = "gca_windows_icon gca_windows_icon-facebook";
			p.appendChild(icon);
			p.appendChild(document.createTextNode(" "));
			a = document.createElement("a");
			a.setAttribute("href", this.urls.facebook_link);
			a.setAttribute("target", "_blank");
			a.setAttribute("rel", "noreferrer");
			a.style.color = "#3c5b9b";
			a.style.textDecoration = "underline";
			a.textContent = "Facebook message";
			p.appendChild(a);
			p.appendChild(document.createTextNode("."));
			body.appendChild(p);

			p = document.createElement("div");
			p.style.paddingBottom = "10px";
			p.appendChild(document.createTextNode("We need your support! Buy us a "));
			icon = document.createElement("div");
			icon.className = "gca_windows_icon gca_windows_icon-beer";
			p.appendChild(icon);
			p.appendChild(document.createTextNode(" "));
			a = document.createElement("a");
			a.setAttribute("href", this.urls.donation_link);
			a.setAttribute("target", "_blank");
			a.setAttribute("rel", "noreferrer");
			a.style.color = "#af790f";
			a.style.textDecoration = "underline";
			a.textContent = "beer";
			p.appendChild(a);
			p.appendChild(document.createTextNode(" by donating and also help us by "));
			icon = document.createElement("div");
			icon.className = "gca_windows_icon gca_windows_icon-translation";
			p.appendChild(icon);
			p.appendChild(document.createTextNode(" "));
			a = document.createElement("a");
			a.setAttribute("href", this.urls.translate_addon);
			a.setAttribute("target", "_blank");
			a.setAttribute("rel", "noreferrer");
			a.style.color = "#3278ee";
			a.style.textDecoration = "underline";
			a.textContent = "translating the addon";
			p.appendChild(a);
			p.appendChild(document.createTextNode(" in your language!"));
			body.appendChild(p);

			p = document.createElement("div");
			p.style.paddingBottom = "10px";
			p.appendChild(document.createTextNode("Do not forget to check the addon's settings bellow, so that you can enable or disable any feature you want."));
			body.appendChild(p);

			// Letter end
			let end = document.createElement("div");
			end.appendChild(document.createTextNode("Yours,"));
			end.appendChild(document.createElement("br"));
			end.appendChild(document.createTextNode("GreatApo & DarkThanos"));

			// Build letter
			letter.appendChild(start);
			letter.appendChild(body);
			letter.appendChild(end);
			box.appendChild(letter);
		},

		createBox_settings : function(box) {
			box.className = "settings_box";

			// Title
			var title = document.createElement('h2');
			title.textContent = gca_locale.get("settings", "settings");
			box.appendChild(title);

			// Icon
			var icon = document.createElement('div');
			icon.className = 'icon';
			box.appendChild(icon);

			// Description
			var desc = document.createElement('div');
			desc.className = 'description';
			desc.appendChild(document.createTextNode(gca_locale.get('settings', 'description')));
			desc.appendChild(document.createElement('br'));
			desc.appendChild(document.createTextNode(gca_locale.get('settings', 'description_click_button')));
			box.appendChild(desc);

			// Clear
			var spacer = document.createElement("div");
			spacer.className = "space";
			box.appendChild(spacer);

			// Insert Settings button
			var button = document.createElement("input");
			button.type = "button";
			button.className = "awesome-button";
			button.value = gca_locale.get("settings", "settings");
			box.appendChild(button);
			// Add on click event
			button.addEventListener("click", () => {
				this.open();
			}, false);
		},

		preinject : {
			active : false,
			hideContent : function(){
				this.active = true;
				if(document.documentElement.className.length > 0)
					document.documentElement.className += " ";
				document.documentElement.className += "hidePrimeContent";
			},
			showContent : function(){
				document.documentElement.className = document.documentElement.className.replace(/\s*hidePrimeContent\s*/i, " ");
			}
		},

		// Options scheme
		scheme : {
			// Global Options
			"global" : {
				// Language
				"language_select" : (function(){
					var scheme = {
						"type" : "custom",
						"dom" : function(data, title, wrapper){
							if(wrapper.className.length > 0) wrapper.className += " ";
							wrapper.className += "language_select";
							// Create select
							data.select = document.createElement("select");
							data.select.style.width = "120px";
							// Create a list of languages
							var languages = [];
							for(let lang in gca_languages){
								if(gca_languages.hasOwnProperty(lang)){
									languages.push(lang);
								}
							}
							// Sort languages
							languages.sort(function(a, b) {
								if(a < b) return -1;
								else if(a > b) return 1;
								else return 0;
							});
							var option;
							for (var i = 0; i < languages.length; i++) {
								let lang = languages[i];
								option = document.createElement("option");
								option.value = lang;
								option.textContent = gca_languages[lang].name;
								if (gca_locale.active == lang) {
									option.selected = true;
								}
								data.select.appendChild(option);
							}
							
							// If language is not selected
							if (data.select.value == '_active'){
								data.select.value = 'en';
							}

							// Count items
							data.count_items = {};
							data.translated_items = 0;
							for (let category in gca_languages['en'].locale) {
								if (gca_languages['en'].locale.hasOwnProperty(category)) {
									for (let item in gca_languages['en'].locale[category]) {
										if (gca_languages['en'].locale[category].hasOwnProperty(item)) {
											data.translated_items++;
										}
									}
								}
							}

							// Create refresh info function
							data.refreshInfo = function() {
								var lang = gca_languages[data.select.value];
								var info = "";

								// Completed percent
								info = 0;
								var translated_items = 0;
								if (data.count_items.hasOwnProperty(data.select.value)) {
									translated_items = data.count_items[data.select.value];
								}
								else {
									for (let category in gca_languages['en'].locale) {
										if (gca_languages['en'].locale.hasOwnProperty(category)) {
											for (let item in gca_languages['en'].locale[category]) {
												if (gca_languages['en'].locale[category].hasOwnProperty(item)) {
													if (lang.locale.hasOwnProperty(category) && lang.locale[category].hasOwnProperty(item)) {
														translated_items++;
													}
												}
											}
										}
									}
									data.count_items[data.select.value] = translated_items;
								}
								info = Math.round(translated_items * 100 / data.translated_items);
								data.info_completed.textContent = gca_locale.get("settings", "translated_percent", {number: info});

								// Translators
								info = "";
								if (lang.translators instanceof Array) {
									for (var i = 0; i < lang.translators.length; i++) {
										if (i != 0) {
											info += ", ";
										}
										info += lang.translators[i];
									}
								} else {
									info += lang.translators;
								}
								data.info_translators.textContent = gca_locale.get("settings", "translated_by", {string: info});
							}
							// Clear both
							let clearboth = document.createElement("div");
							clearboth.style.clear = "both";
							// Add language info
							data.info_completed = document.createElement("div");
							data.info_completed.className = "translate-percent";
							data.info_translators = document.createElement("div");
							data.info_translators.className = "translated-by";
							data.refreshInfo();
							// Add change event
							data.select.addEventListener("change", data.refreshInfo, false);
							return [data.select, clearboth, data.info_translators, data.info_completed];
						},
						"save" : function(data){
							gca_locale._setLang(data.select.value);
						}
					};
					return scheme;
				})(),

				// Sounds
				"sound_notifications" : true,
				// Browser notifications
				"browser_notifications" : true,

				// Extended Hp-Xp info
				"extended_hp_xp_info" : true,
				"extended_hp_xp_info_potion" : true,
				"hp_timer_for_full_life" : true,

				// Shortcuts bar
				"shortcuts_bar" : true,
					// msg : guild message / personal message
					// gmd : guild medic
					// gmr : guild market
					// gst : guild storge
					// gbn : guild bank
					// gwr : guild war room
					// gjl : guild jail
					// glb : guild library
					// sim : battle simulator
					// stt : show my stats
					// onl : online friends
				"shortcuts_bar_buttons" : (function(){
					var scheme = {
						"type" : "enumerator",
						"values" : 'msg|gmd|gmr|gst|gbn|gwr|gjl|glb|sim|stt|onl'
					};
					var icons = ["message-icon", "cross-icon", "market-icon", "box-icon", "gold-icon", "report-icon", "castle-icon", "notebook-icon", "swords-icon", "people-icon", "online-icon"];
					scheme.values_dom = [];
					var tmp;
					for (var i = 0; i < icons.length; i++) {
						tmp = document.createElement("span");
						tmp.className = icons[i];
						tmp.style.width = "25px";
						tmp.style.height = "25px";
						tmp.style.display = "block";
						scheme.values_dom.push(tmp);
					}
					return scheme;
				})(),
			
				// Auction Status
				"auction_status_bar" : false,
				"auction_status_notification" : false,

				// Top fixed bar
				"top_fixed_bar" : true,

				// Advance main menu
				"advance_main_menu" : true,
				"submenu_click_to_change" : false,

				// Remember Tabs
				"remember_tabs" : true,

				// Attacked Timer
				"attacked_timers" : true,
				// Quest Timer
				"quest_timer" : true,
				// Merchants
				"merchants_timer" : true,
				// Forge
				"forge_timers" : true,

				// Cooldown Sound Notification
				"cooldown_sound_notifications" : true,

				// Notifications
				"notify_new_guild_application" : false,
				// Notifications Interval in minutes
				"notify_new_guild_application_interval" : 60,
			
				// Enable x-scroll
				"x_scroll" : true,

				// Enable item's shadow
				"item_shadow" : true,

				// Enable inventory group options
				"inventory_options_group" : true,
				// Enable inventory gold info
				"inventory_gold_info" : false,

				// Enable pagination layout
				"pagination_layout" : true,
				
				// Gold/Exp data
				"gold_exp_data" : true,
				
				// Underworld
					// Pray Shortcut
					"pray_shorcut" : true,
				
				// Centurio & PowerUps timers
				"centurio_powerups_timers" : false,
				
				// Show item durability
				"show_durability" : (function(){
					var scheme = {
						"type" : "custom",
						"dom" : function(data, title, wrapper){
							if(wrapper.className.length > 0) wrapper.className += " ";
							wrapper.className += "show_durability_select";
							// Create select
							data.select = document.createElement("select");
							// Create a list of languages
							let durations = [ gca_locale.get("settings",'do_not_show'), gca_locale.get("settings",'show_as')+' %', gca_locale.get("settings",'show_as')+' ⚒'];//●
							for (let i = 0; i < durations.length; i++) {
								let option = document.createElement("option");
								option.value = i;
								option.textContent = durations[i];
								data.select.appendChild(option);
							}
							data.select.selectedIndex = gca_data.section.get("global", "show_durability", 0);
							return data.select;
						},
						"save" : function(data){
							gca_data.section.set("global", "show_durability", data.select.value);
						}
					};
					return scheme;
				})(),
				
				// Minimum durability alert
				"min_durability" : {
					"type" : "range",
					"min" : 0,
					"step" : 5,
					"max" : 200,
					"scale" : 1,
					"db" : "section",
				}
			},

			// Overview Options
			"overview" : {
				// Analyze items
				"analyze_items" : true,
				// Show the life gain a food gives
				"food_life_gain" : true,
				// Show block and avoid critical values caps
				"block_avoid_caps" : true,
				// Show best food to consume
				"best_food" : true,
				// Transparent food gives you more life than you need
				"overfeed_food" : true,
				// Daily Bonus Log
				"daily_bonus_log" : true,
				// Detailed buffs timer
				"buffs_detailed_time" : true,
				// Mercenaries manager
				"mercenaries_manager" : true,
				// Mercenary tooltip show
				"mercenary_tooltip_show" : true,
				// Show more statistics
				"more_statistics" : true,
				// new Achievements layout
				"achivements_layout" : true,
				// Costumes layout
				"costumes_layout" : true,
				// Items repair overview
				"items_repair_overview" : true
			},

			// Messages Options
			"messages" : {
				// Layout
				"messages_layout" : true,
				// Show Unread
				"show_unread" : true,
				// Separate days
				"separate_days" : true,
				// Send Message Box
				"send_message_box" : true,
				// Show more guild mate info
				"more_guild_mate_info" : true,
				// Show message links
				"show_message_links" : true,
				// Get guild battle info
				"get_guild_battle_info" : true,
				// Show sidebar
				"show_sidebar" : true,
				// Fix header links
				"fix_header_links" : true,
				// New Message focus manage
				"new_message_focus" : true,
				// New Message friend list
				"new_message_friend_list" : true
			},

			// Packages Options
			"packages" : {
				// Improve filters layout
				"filters_layout" : true,
				// Improve info layout
				"compact_info_layout" : true,
				// Improve packets layout
				"items_layout" : true,
				// Small items layout
				"small_items_layout" : false,
				// Load more packages pages
				"load_more_pages" : true,
				// Number of pages to load
				"pages_to_load" : 2,
				// Show item's price
				"item_price" : false,
				// Special category features
				"special_category_features" : true,
				// Open packets with double click
				"double_click_open" : false,
				// Advance packet filter
				"advance_filter" : false
			},

			// Pantheon Options
			"pantheon" : {
				// Reorder quests
				"quests_reorder" : true,
				// Insert more details on quests
				"quests_detailed_rewards" : true,
				// Show completed missions
				"missions_show_completed" : true,
				// Show gods points percent
				"gods_show_points_percent" : true,
				// Open many mysteryboxes button
				"open_many_mysteryboxes" : true,
				// Show mysterybox reward's value in rubies
				"show_mysterybox_rewards_rubies" : true
			},

			// Reports
			"reports" : {
				// Style change
				"style_change" : true,
				"load_loot_tooltips" : true,
				// Item found
				"found_items" : true
			},

			"training" : {
				// Show discount
				"show_discount" : true,
				// Show basic in bars
				"show_basics_in_bars" : true,
				// Enable multiple training
				"multiple_train" : true,
				// Enable calculator training
				"calculator_train" : true,
				// Show analyze data
				"show_analyze_items_data" : true,
				// Show points after upgrade
				"show_points_after_upgrade" : true,
			},

			// Merchants
			"merchants" : {
				// Fade items that you can not afford
				"fade_unaffordable_items" : true,
				// Show shop info
				"show_shop_info" : true,
				// Double click items to sell or buy
				"double_click_actions" : true
			},
			
			// Forge
			"forge" : {
				// Packages & market shortcuts for each material need (forge/repair)
				"material_links" : true,
				// Show Prefix/Sufix/Base levels
				"show_levels" : true,
				// Show materials names
				"horreum_materials_names" : true,
				// Rmember options
				"horreum_remember_options" : true,
				// Select material with click
				"horreum_select_meterials" : true
			},
			
			// Arena
			"arena" : {
				// Ignore attack confirmations
				"ignore_attack_confirmations" : false,
				// Show simulator's image-link
				"show_simulator_imagelink" : true,
				// Sort players by level
				"sort_by_lvl" : true,
				// Highlight guild members on other servers
				"highlight_guild_members" : true,
				// Players target list
				"target_list" : true
			},
			
			// Magus
			"magus" : {
				// Fade items that you can not improve
				"fade_unimprovable_items" : true
			},
			
			// Market
			"market" : {
				// Soul-bound Buy-Confirmation
				"soulbound_warning" : true,
				"one_gold_warning" : true,
				// Show Cancel-all button
				"cancel_all_button" : true,
				// Remember sell duration
				"remember_sell_duration" : false,
				// Default sell duration
				"sell_duration" : (function(){
					var scheme = {
						"type" : "custom",
						"dom" : function(data, title, wrapper){
							if(wrapper.className.length > 0) wrapper.className += " ";
							wrapper.className += "sell_duration_select";
							// Create select
							data.select = document.createElement("select");
							// Create a list of languages
							let durations = ['2h','8h','24h','48h'];
							for (let i = 0; i < durations.length; i++) {
								let option = document.createElement("option");
								option.value = i;
								option.textContent = durations[i];
								data.select.appendChild(option);
							}
							data.select.selectedIndex = gca_data.section.get("market", "sell_duration", 0);
							return data.select;
						},
						"save" : function(data){
							gca_data.section.set("market", "sell_duration", data.select.value);
						}
					};
					return scheme;
				})(),
				// 1 gold mode
				"one_gold_mode" : true,
				// Remember sorting 
				"remember_sort" : false
			},
			
			// Expedition Options
			"expedition" : {
				// Show that each enemy drops
				"show_enemy_drops" : true,
				// Underworld expedition layout
				"underworld_layout" : true
			},

			// Guild Options
			"guild" : {
				// Jail layout
				"jail_layout" : true,
				// Library options
				"library_layout" : true,
				"library_fade_non_scrolls" : true,
				"library_tooltip_data" : true,
				// Bank Layouts
				"bank_donate_layout" : true,
				"bank_book_layout" : true,
				// Medic Layout
				"medic_layout" : true
			},

			// Auction Options
			"auction" : {
				// Count page items
				"items_counters" : true,
				// More search levels
				"more_search_levels" : true,
				// Show price data
				"item_price_analyze" : true,
				// Show item level
				"item_level" : true,
				// Show 3 items per line
				"x3_items_per_line" : false,
				// Enable multi bids
				"multi_bids" : true,
				// Show extra stats on items
				"extra_item_stats" : true,
				// Save auction last search
				"save_last_state" : true
			},

			"events" : {
				// Craps Event Timer
				"craps_timer" : true,
				// Server Quest Event Timer
				"server_quest_timer" : true
			},

			"sound" : {
				// Sounds enabled
				"enabled" : true,
				// Sounds muted
				"muted" : {
					"type" : "boolean",
					"db" : "section",
				},
				// Volume scale
				"volume" : {
					"type" : "range",
					"min" : 1,
					"step" : 1,
					"max" : 100,
					"scale" : 0.01,
					"db" : "section",
				},
				/*
				// Channels
				"channels" : (function(){
					var scheme = {
						type : 'custom',
						dom : function(data, title, wrapper){
							// Channels wrapper
							var section = document.createElement('div');

							let channels = gca_audio_channels.list;
							for (let channel in channels) {
								if (channels.hasOwnProperty(channel)) {
									let div = document.createElement('div');
									div.innerHTML = channel;
									section.appendChild(div);
								}
							}

							return section;
						},
						save : function(data){
							//gca_data.section.set("global", "show_durability", data.select.value);
						}
					};
					return scheme;
				})()
				*/
			},

			"data" : {
				"__scheme" : {
					"save_button" : false
				},
				// Export
				"export_settings" : (function(){
					var scheme = {
						"type" : "custom",
						"dom" : function(data, title, wrapper){
							// Create button
							data.export = document.createElement("input");
							data.export.setAttribute("type", "button");
							data.export.className = "awesome-button";
							data.export.style.float = "right";
							data.export.value = gca_locale.get("settings", "export");
							data.export.addEventListener("click", () => {
								gca_settings.backup.export();
							}, false);
							// Add change event
							return [data.export];
						}
					};
					return scheme;
				})(),

				// Import
				"import_settings" : (function(){
					var scheme = {
						"type" : "custom",
						"dom" : function(data, title, wrapper){
							// Create file select
							data.file = document.createElement("input");
							data.file.setAttribute("type", "file");
							data.file.className = "settings-file-input";
							// Create select
							data.import = document.createElement("input");
							data.import.setAttribute("type", "button");
							data.import.className = "awesome-button";
							data.import.style.float = "right";
							data.import.style.marginTop = "5px";
							data.import.value = gca_locale.get("settings", "import");
							// On import
							data.import.addEventListener("click", () => {
								// Check number of files
								let files = data.file.files;
								if (files.length !== 1) {
									gca_notifications.error(gca_locale.get("general", "error"));
									return;
								}
								// Disable elements
								data.import.setAttribute("disabled", "disabled");
								data.file.setAttribute("disabled", "disabled");
								// Import data
								gca_settings.backup.importFromFile(files[0], (error) => {
									if (error) {
										gca_notifications.error(gca_locale.get("general", "error") + " - " + error);
									}
									else {
										// Data were imported
										data.import.removeAttribute("disabled");
										data.file.removeAttribute("disabled");
										data.file.value = "";
										// Notify user
										// gca_notifications.info(gca_locale.get("settings", "notification_reload"));
										document.location.href = document.location.href;
									}
								});
							}, false);
							// Add change event
							return [data.file, data.import];
						}
					};
					return scheme;
				})(),

				// Reset
				"reset_settings" : (function(){
					var scheme = {
						"type" : "custom",
						"dom" : function(data, title, wrapper){
							// Create button
							data.reset = document.createElement("input");
							data.reset.setAttribute("type", "button");
							data.reset.className = "awesome-button";
							data.reset.style.float = "right";
							data.reset.value = gca_locale.get("settings", "reset");
							data.reset.addEventListener("click", () => {
								if (confirm(gca_locale.get("settings", "reset_settings_confirm")) == true) {
									gca_settings.backup.resetSettings();
									// gca_notifications.info(gca_locale.get("settings", "notification_reload"));
									document.location.href = document.location.href;
								}
							}, false);
							// Add change event
							return [data.reset];
						}
					};
					return scheme;
				})(),

				// Clear
				"clear_data" : (function(){
					var scheme = {
						"type" : "custom",
						"dom" : function(data, title, wrapper){
							// Create button
							data.clear = document.createElement("input");
							data.clear.setAttribute("type", "button");
							data.clear.className = "awesome-button";
							data.clear.style.float = "right";
							data.clear.value = gca_locale.get("settings", "clear");
							data.clear.addEventListener("click", () => {
								if (confirm(gca_locale.get("settings", "clear_data_confirm")) == true) {
									gca_settings.backup.clearAll();
									// gca_notifications.info(gca_locale.get("settings", "notification_reload"));
									document.location.href = document.location.href;
								}
							}, false);

							// Create info
							data.info = document.createElement("div");
							data.info.style.textAlign = "right";
							data.info.style.padding = "0px 5px";
							data.info.textContent = gca_settings.backup.getStorageSize(true);

							// Add change event
							return [data.clear, data.info];
						}
					};
					return scheme;
				})()
			}
		},

		parseScheme : function(){
			// For each category
			for(var category in this.scheme){
				// For each label
				for(var label in this.scheme[category]){

					// Settings Object
					if(typeof this.scheme[category][label] == "object"){
						var type = this.scheme[category][label].type;
						if(!type) continue;
						var locale = this.scheme[category][label].locale;
						if(!locale) locale = gca_locale.get("settings", "category_" + category + "$" + label);
						var _category = this.scheme[category][label].category;
						if(!_category) _category = category;
						var _label = this.scheme[category][label].label;
						if(!_label) _label = label;
						var _db = this.scheme[category][label].db;
						if(!_db) _db = "options";

						switch(this.scheme[category][label].type){
							case "boolean" :
								this.scheme[category][label] = this.class.boolean(locale, _category, _label, _db);
								break;
							case "integer" :
								this.scheme[category][label] = this.class.integer(locale, _category, _label, _db);
								break;
							case "enumerator" :
								var _values = this.scheme[category][label].values;
								var _values_locale = this.scheme[category][label].values_locale;
								if(!_values_locale) _values_locale = false;
								var _values_dom = this.scheme[category][label].values_dom;
								if(!_values_dom) _values_dom = false;
								this.scheme[category][label] = this.class.enumerator(locale, _values, _values_locale, _values_dom, _category, _label, _db);
								break;
							case "range" :
								var _min = this.scheme[category][label].min;
								if(!_min) _min = 0;
								var _step = this.scheme[category][label].step;
								if(!_step) _step = 1;
								var _max = this.scheme[category][label].max;
								if(!_max) _max = 100;
								var _scale = this.scheme[category][label].scale;
								if(!_scale) _scale = 1;
								this.scheme[category][label] = this.class.range(locale, _min, _step, _max, _scale, _category, _label, _db);
								break;
							case "custom" :
								var _dom = this.scheme[category][label].dom;
								if(!_dom) _dom = 0;
								var _save = this.scheme[category][label].save;
								if(!_save) _save = 0;
								this.scheme[category][label] = this.class.custom(
									gca_locale.get("settings", "category_" + category + "$" + label),
									_dom,
									_save,
									category,
									label,
									_db
								);
						}
					}

					// Parse from value
					else{
						var type = this.scheme[category][label];
						if(typeof type != "string"){
							if(typeof type == "boolean")
								type = "boolean";
							else if(typeof type == "number")
								type = "integer";
						}
						else{
							if(type.match(/\|/i)){
								type = "enumerator";
							}
						}
						var db = "options";

						switch(type){
							case "boolean" :
								this.scheme[category][label] = this.class.boolean(
									gca_locale.get("settings", "category_" + category + "$" + label),
									category,
									label,
									db
								);
								break;
							case "integer" :
								this.scheme[category][label] = this.class.integer(
									gca_locale.get("settings", "category_" + category + "$" + label),
									category,
									label,
									db
								);
								break;
							case "enumerator" :
								this.scheme[category][label] = this.class.enumerator(
									gca_locale.get("settings", "category_" + category + "$" + label),
									this.scheme[category][label],
									false,
									false,
									category,
									label,
									db
								);
								break;
							case "range" :
								this.scheme[category][label] = this.class.range(
									gca_locale.get("settings", "category_" + category + "$" + label),
									0,
									1,
									100,
									1,
									category,
									label,
									db
								);
								break;
							case "custom" :
								var _dom = this.scheme[category][label].dom;
								if(!_dom) _dom = 0;
								var _save = this.scheme[category][label].save;
								if(!_save) _save = 0;
								this.scheme[category][label] = this.class.custom(
									gca_locale.get("settings", "category_" + category + "$" + label),
									null,
									null,
									category,
									label,
									db
								);
						}
					}
					
				}
			}

			return;
		},

		// Open Bag manager
		open : function(){
			// Get url
			var url = gca_getPage.parameters();

			// Get tabname
			var tabname = "global";
			if(url.gcamod == "settings" && url.category){
				tabname = url.category;
			}

			// Change Url
			url.gcamod = "settings";
			delete url.sh;
			window.history.pushState({category : tabname}, "GCA - Settings", gca_getPage.link(url));

			// Create if not exist
			if(!document.getElementById("content_2nd"))
				this.create();

			// Open Global tab
			this.openTab(tabname, gca_locale.get("settings", "category_" + tabname));

			// Scroll to top
			window.scrollTo(0, 0);

			// Hide page's content
			document.getElementById("content").style.display = "none";
			// Show page's 2nd content
			document.getElementById("content_2nd").style.display = "block";

			var that = this;
			// Catch history events
			window.addEventListener("popstate", function (event) {
				// Previus tab
				if(event.state){
					var tabname = event.state.category;
					// Open Global tab
					that.openTab(tabname, gca_locale.get("settings", "category_" + tabname));
					// Scroll to top
					window.scrollTo(0, 0);
				}
				// Close settings
				else {
					// Hide page's 2nd content
					document.getElementById("content_2nd").style.display = "none";
					// Show page's content
					document.getElementById("content").style.display = "block";
				}
				return true;
			}, false);
		},

		// Create options
		create : function(){
			let content = document.getElementById("content");
			// Create a new content
			var content_2nd = document.createElement("div");
			content_2nd.id = "content_2nd";
			content_2nd.style.display = "none";
			content.parentNode.insertBefore(content_2nd, content.nextSibling);

			// Logo
			var logo = document.createElement("div");
			logo.id = "settings_logo";
			var logo_title = document.createElement("div");
			logo_title.className = "title";
			logo_title.textContent = gca_locale.get("settings", "settings");
			logo.appendChild(logo_title);
			content_2nd.appendChild(logo);

			// Menu Wrapper
			var menu_div = document.createElement("div");
			menu_div.id = "settings_menu";
			content_2nd.appendChild(menu_div);

			// Menu
			var menu = document.createElement("ul");
			menu_div.appendChild(menu);

			// Tab Wrapper
			this.tab_div = document.createElement("div");
			this.tab_div.id = "settings_tab";
			content_2nd.appendChild(this.tab_div);

			// Clear both
			var clearfix = document.createElement("div");
			clearfix.style.clear = "both";
			content_2nd.appendChild(clearfix);

			// Create Categories
			for (let category in this.scheme) {
				let title = gca_locale.get("settings", "category_" + category);
				let li = document.createElement('li');
				li.dataset.category = category;
				li.textContent = title;
				menu.appendChild(li);
				li.addEventListener('click', (function(tabname, title, that){
					return function(){
						// Get url
						var url = gca_getPage.parameters();
						url.category = tabname;
						url.gcamod = "settings";
						delete url.sh;
						// Change Url
						window.history.pushState({category : tabname}, "GCA - Settings", gca_getPage.link(url));

						that.openTab(tabname, title);
					};
				})(category, title, this), false);
			}
		},

		activeTab : null,
		openTab : function(tabname, title){
			// Clear tab
			this.tab_div.innerHTML = "";

			// If tabname not exist
			if(!tabname || !this.scheme[tabname]){
				tabname = "global";
			}

			// If is open do nothing
			if(this.activeTab == tabname)
				return;

			var li = document.getElementById('settings_menu').getElementsByTagName('li');
			for (var i = 0; i < li.length; i++) {
				if(li[i].dataset.category == tabname){
					li[i].className = "active";
				}else{
					li[i].className = "";
				}
			}

			// Open tab
			this.createTab(tabname, title, this.scheme[tabname]);
		},

		tabItems : null,
		createTab : function(name, titleText, scheme){
			// Get sceme options
			var scheme_options = {
				save_button : true
			};
			if (scheme.hasOwnProperty("__scheme")) {
				for (let option in scheme["__scheme"]) {
					if (scheme["__scheme"].hasOwnProperty(option) && scheme_options.hasOwnProperty(option)) {
						scheme_options[option] = scheme["__scheme"][option];
					}
				}
			}

			// Tab Items reset
			this.tabItems = [];

			var container = document.createElement("div");

			var title = document.createElement("div");
			title.textContent = titleText;
			title.className = "settings_tab_title";
			container.appendChild(title);

			// Create each item
			for(let id in scheme){
				this.tabItems.push(
					this.createItem(id, scheme[id], container)
				);
			}

			// Save button
			if (scheme_options.save_button) {
				var save = document.createElement("input");
				save.type = "button";
				save.className = "button2";
				save.style.float = "right";
				save.value = gca_locale.get("settings", "save");
				// Save event
				var that = this;
				save.addEventListener('click', function(){
					// Saving
					for (var i = 0; i < that.tabItems.length; i++) {
						that.tabItems[i].save();
					}
					// Notify
					// gca_notifications.info(gca_locale.get("settings", "notification_reload"));
					// Reload page
					document.location.href = document.location.href;
				}, false);
				container.appendChild(save);
			}

			this.tab_div.appendChild(container);
		},

		createItem : function(id, scheme, container){
			// Costruck known type
			switch(scheme.type){
				case "boolean": return this.construct.boolean(id, scheme, container);
				case "integer": return this.construct.integer(id, scheme, container);
				case "enumerator": return this.construct.enumerator(id, scheme, container);
				case "range": return this.construct.range(id, scheme, container);
				case "custom": return this.construct.custom(id, scheme, container);
			}

			// Default - Unknown
			var item = {};
			item.id = id;
			item.save = function(){};

			return item;
		},

		construct : {
			boolean : function(id, scheme, container){
				// Item object
				var item = {};
				item.id = id;
				item.data = {};

				// Type Wrapper
				var typeWrapper = document.createElement('div');
				typeWrapper.className = "type-wrapper type-boolean";
				var title = document.createElement('span');
				title.textContent = scheme.locale;
				typeWrapper.appendChild(title);
				container.appendChild(typeWrapper);

				var select = document.createElement('div');
				select.className = "switch-field";

				item.data.true = document.createElement('input');
				item.data.true.type = "radio";
				item.data.true.id = id + "__true";
				item.data.true.name = id;
				item.data.true.value = "true";
				select.appendChild(item.data.true);
				var label = document.createElement('label');
				label.setAttribute('for', id + "__true");
				label.textContent = "On";
				select.appendChild(label);

				item.data.false = document.createElement('input');
				item.data.false.type = "radio";
				item.data.false.id = id + "__false";
				item.data.false.name = id;
				item.data.false.value = "false";
				select.appendChild(item.data.false);
				label = document.createElement('label');
				label.setAttribute('for', id + "__false");
				label.textContent = "Off";
				select.appendChild(label);

				if(scheme.value) item.data.true.checked = true;
				else item.data.false.checked = true;

				typeWrapper.appendChild(select);

				var clearBoth = document.createElement('div');
				clearBoth.style.clear = "both";
				typeWrapper.appendChild(clearBoth);

				item.save = function(){
					var value = item.data.true.checked;

					if(scheme.data.db == "options"){
						gca_options.set(scheme.data.category, scheme.data.label, value);
					}
					else if(scheme.data.db == "section"){
						gca_data.section.set(scheme.data.category, scheme.data.label, value);
					}
				};

				return item;
			},

			integer : function(id, scheme, container){
				// Item object
				var item = {};
				item.id = id;
				item.data = {};

				// Type Wrapper
				var typeWrapper = document.createElement('div');
				typeWrapper.className = "type-wrapper type-integer";
				var title = document.createElement('span');
				title.textContent = scheme.locale;
				typeWrapper.appendChild(title);
				container.appendChild(typeWrapper);

				var select = document.createElement('div');
				select.className = "switch-field";

				item.data.input = document.createElement('input');
				item.data.input.type = "text";
				item.data.input.id = id + "__integer";
				item.data.input.name = id;
				item.data.input.value = scheme.value;
				select.appendChild(item.data.input);

				typeWrapper.appendChild(select);

				var clearBoth = document.createElement('div');
				clearBoth.style.clear = "both";
				typeWrapper.appendChild(clearBoth);

				item.save = function(){
					var value = item.data.input.value;
					value = parseInt(value, 10);
					if(isNaN(value)){
						value = scheme.value;
						item.data.input.value = scheme.value;
					}
					else {
						if(scheme.data.db == "options"){
							gca_options.set(scheme.data.category, scheme.data.label, value);
						}
						else if(scheme.data.db == "section"){
							gca_data.section.set(scheme.data.category, scheme.data.label, value);
						}
					}
				};

				return item;
			},

			enumerator : function(id, scheme, container){
				// Item object
				var item = {};
				item.id = id;
				item.data = {};

				// Type Wrapper
				var typeWrapper = document.createElement('div');
				typeWrapper.className = "type-wrapper type-enumerator";
				var title = document.createElement('span');
				title.textContent = scheme.locale;
				typeWrapper.appendChild(title);
				container.appendChild(typeWrapper);

				var select = document.createElement('div');
				select.className = "switch-field";

				item.data.types = [];
				for(var i = 0; i < scheme.types.length; i++){
					var typeItem = document.createElement('input');
					typeItem.type = "checkbox";
					typeItem.id = id + "__" + scheme.types[i];
					typeItem.name = id;
					typeItem.value = scheme.types[i];
					select.appendChild(typeItem);
					var label = document.createElement('label');
					label.setAttribute('for', id + "__" + scheme.types[i]);
					
					if (scheme.values_locale && scheme.values_locale[i]) {
						label.appendChild(scheme.values_locale[i]);
					}
					else if (scheme.values_dom && scheme.values_dom[i]) {
						label.appendChild(scheme.values_dom[i]);
					}
					else {
						label.textContent = scheme.types[i];
					}
					select.appendChild(label);

					if(scheme.value.indexOf(scheme.types[i]) > -1)
						typeItem.checked = true;

					item.data.types.push(typeItem);
				}

				typeWrapper.appendChild(select);

				var clearBoth = document.createElement('div');
				clearBoth.style.clear = "both";
				typeWrapper.appendChild(clearBoth);

				item.save = function(){
					var value = [];

					for (var i = 0; i < item.data.types.length; i++) {
						if(item.data.types[i].checked)
							value.push(item.data.types[i].value);
					}

					if(scheme.data.db == "options"){
						gca_options.set(scheme.data.category, scheme.data.label, value.join("|"));
					}
					else if(scheme.data.db == "section"){
						gca_data.section.set(scheme.data.category, scheme.data.label, value.join("|"));
					}
				};

				return item;
			},

			range : function(id, scheme, container){
				// Item object
				var item = {};
				item.id = id;
				item.data = {};

				var input_value = scheme.value / scheme.scale;
				
				// Type Wrapper
				var typeWrapper = document.createElement('div');
				typeWrapper.className = "type-wrapper type-range";
				var title = document.createElement('span');
				title.textContent = scheme.locale;
				typeWrapper.appendChild(title);
				container.appendChild(typeWrapper);

				var select = document.createElement('div');
				select.className = "switch-field";

				var preview = document.createElement('div');
				preview.style.float = "left";
				preview.style.width = "32px";
				preview.style.fontSize = "10px";
				preview.style.height = "20px";
				preview.style.lineHeight = "20px";
				preview.textContent = input_value;//Math.round((input_value / scheme.max) * 100);
				select.appendChild(preview);

				item.data.input = document.createElement('input');
				item.data.input.style.height = "12px";
				item.data.input.style.width = "80px";
				item.data.input.type = "range";
				item.data.input.id = id + "__range";
				item.data.input.name = id;
				item.data.input.value = input_value;
				item.data.input.setAttribute("min", scheme.min);
				item.data.input.setAttribute("step", scheme.step);
				item.data.input.setAttribute("max", scheme.max);
				select.appendChild(item.data.input);

				item.data.input.addEventListener('change', function(){
					preview.textContent = this.value;//Math.round((this.value / scheme.max) * 100);
				}, false);

				typeWrapper.appendChild(select);

				var clearBoth = document.createElement('div');
				clearBoth.style.clear = "both";
				typeWrapper.appendChild(clearBoth);

				item.save = function(){
					var value = item.data.input.value;
					value = parseInt(value, 10);

					if(scheme.data.db == "options"){
						gca_options.set(scheme.data.category, scheme.data.label, value * scheme.scale);
					}
					else if(scheme.data.db == "section"){
						gca_data.section.set(scheme.data.category, scheme.data.label, value * scheme.scale);
					}
				};

				return item;
			},

			custom : function(id, scheme, container){
				// Item object
				var item = {};
				item.id = id;
				item.data = {};

				// Type Wrapper
				var typeWrapper = document.createElement('div');
				typeWrapper.className = "type-wrapper type-custom";
				var title = document.createElement('span');
				title.textContent = scheme.locale;
				typeWrapper.appendChild(title);
				container.appendChild(typeWrapper);

				if(typeof scheme.dom == "function"){
					var custom = scheme.dom(item.data, title, typeWrapper);
					if (custom instanceof Array) {
						for (var i = 0; i < custom.length; i++) {
							typeWrapper.appendChild(custom[i]);
						}
					} else {
						typeWrapper.appendChild(custom);
					}
				}

				var clearBoth = document.createElement('div');
				clearBoth.style.clear = "both";
				typeWrapper.appendChild(clearBoth);

				item.save = function(){
					if(typeof scheme.save == "function"){
						scheme.save(item.data);
					}
				};

				return item;
			}
		},

		class : {
			boolean : function(locale, category, label, db){
				return {
					type : "boolean",
					locale : locale,
					data : {
						category : category,
						label : label,
						db : db
					},
					value : 
						(db == "options") ? gca_options.bool(category, label) :
						(db == "section") ? gca_data.section.get(category, label, gca_options.get(category, label)) :
						null
				};
			},
			integer : function(locale, category, label, db){
				return {
					type : "integer",
					locale : locale,
					data : {
						category : category,
						label : label,
						db : db
					},
					value : 
						(db == "options") ? gca_options.get(category, label) :
						(db == "section") ? gca_data.section.get(category, label, gca_options.get(category, label)) :
						null
				};
			},
			enumerator : function(locale, types, values_locale, values_dom, category, label, db){
				var defValues = types.split('|');
				var values = [];
				var saved = 
					(db == "options") ? gca_options.get(category, label).split('|') :
					(db == "section") ? gca_data.section.get(category, label, gca_options.get(category, label)).split('|') :
					[];

				for(var i = 0; i < saved.length; i++){
					if(defValues.indexOf(saved[i]) > -1){
						values.push(saved[i]);
					}
				}

				return {
					type : "enumerator",
					locale : locale,
					types : defValues,
					values_locale : values_locale,
					values_dom : values_dom,
					data : {
						category : category,
						label : label,
						db : db
					},
					value : values
				};
			},
			range : function(locale, min, step, max, scale, category, label, db){
				return {
					type : "range",
					locale : locale,
					data : {
						category : category,
						label : label,
						db : db
					},
					value : 
						(db == "options") ? gca_options.get(category, label) :
						(db == "section") ? gca_data.section.get(category, label, gca_options.get(category, label)) :
						null
					,

					min : min,
					step : step,
					max : max,
					scale : scale
				};
			},
			custom : function(locale, dom, save, category, label, db){
				return {
					type : "custom",
					locale : locale,
					data : {
						category : category,
						label : label,
						db : db
					},
					dom : dom,
					save : save
				};
			}
		}
	},

	// Backup and Restore settings
	backup : {
		// Export gca settings
		export : function() {
			// Get settings data
			let settings_data = window.localStorage.getItem(gca_data_manager.name + "_settings");
			// If no data set to no data
			if(settings_data === null){
				settings_data = "{\"data\":{}}";
			}

			// Check for errors
			try {
				JSON.parse(settings_data);
			} catch (e) {
				// Set to no data
				settings_data = "{\"data\":{}}";
			}

			// Beautify data
			let settings_json = JSON.parse(settings_data);
			settings_data = JSON.stringify(settings_json, null, "\t");

			// Download file
			let file = document.createElement('a');
			file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(settings_data));
			file.setAttribute('download', "settings_" + gca_section.country + "_s" + gca_section.server + "_" + gca_section.playerId + ".gca");
			file.click();
		},
		// Import gca settings
		import : function(settings_data) {
			// Check for json errors
			try {
				// Parse json
				JSON.parse(settings_data);
			}
			catch (e) {
				return "Parse error";
			}

			// Parse data
			let settings_json = JSON.parse(settings_data);

			// If no valid structure
			if (!settings_json.hasOwnProperty("data") || typeof settings_json.data !== "object") {
				return "Data error";
			}

			// Start reading data
			let settings = {data : {}};

			// For each category
			for (let category in gca_options.data) {
				if (gca_options.data.hasOwnProperty(category)) {
					// If category exist in imported data
					if (settings_json.data.hasOwnProperty(category)) {
						settings.data[category] = {};

						// For each item in category
						for (let item in gca_options.data[category]) {
							if (gca_options.data[category].hasOwnProperty(item)) {
								
								// If item exist in imported data
								if (settings_json.data[category].hasOwnProperty(item)) {
									// Save data
									settings.data[category][item] = settings_json.data[category][item];
								}

							}
						}

					}
					
				}
			}

			// Prepare data
			let imported_data = JSON.stringify(settings);
			// Save data
			window.localStorage.setItem(gca_data_manager.name + "_settings", imported_data);

			// No errors
			return false;
		},
		importFromFile : function(file, callback) {
			try {
				// Create reader
				var reader = new FileReader();
				// Listen event onloadend
				reader.onloadend = (evt) => {
					if (evt.target.readyState == FileReader.DONE) {
						// Import
						let error = this.import(evt.target.result);
						// Call the callback
						callback(error);
					}
				};
				// Start reading
				reader.readAsBinaryString(file);
			} catch (e) {
				callback("Unsupported");
			}
		},

		// Reset settings
		resetSettings : function() {
			// Clear all settings
			window.localStorage.removeItem(gca_data_manager.name + "_" + "settings");
		},

		// Define addon's storages
		addonStorages : ["advanced-menu", "cache", "data", "guild", "lang", "messages", "overview", "settings", "sound", "stats", "timers"],
		
		// Clear all data
		clearAll : function() {
			// Clear all storages
			for (let i = this.addonStorages.length - 1; i >= 0; i--) {
				window.localStorage.removeItem(gca_data_manager.name + "_" + this.addonStorages[i]);
			}
		},

		// Count size of db
		getStorageSize : function(humanReadable = false) {
			var bytes = 0;
			// Count all storages
			for (let i = this.addonStorages.length - 1; i >= 0; i--) {
				let data = window.localStorage.getItem(gca_data_manager.name + "_" + this.addonStorages[i]);
				if (typeof data === "string") {
					// https://stackoverflow.com/questions/2219526/how-many-bytes-in-a-javascript-string
					bytes += encodeURI(data).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1;
				}
			}

			// If want bytes number
			if (!humanReadable)
				return bytes;

			// Create human readable string
			if(Math.abs(bytes) < 1024) {
				return bytes + ' B';
			}
			var units = ['kB','MB','GB','TB','PB','EB','ZB','YB'];
			var u = -1;
			do {
				bytes /= 1024;
				++u;
			} while(Math.abs(bytes) >= 1024 && u < units.length - 1);
			return bytes.toFixed(1) + '' + units[u];
		}
	}

};

// Onload Handler
(function(){
	var loaded = false;
	var fireLoad = function() {
		if(loaded) return;
		loaded = true;
		gca_settings.inject();
	};
	gca_settings.preinject();
	if (document.readyState == 'interactive' || document.readyState == 'complete') {
		fireLoad();
	} else {
		window.addEventListener('DOMContentLoaded', fireLoad, true);
		window.addEventListener('load', fireLoad, true);
	}
})();

// ESlint defs
/* global gca, gca_data, gca_data_manager, gca_getPage, gca_languages, gca_locale, gca_notifications, gca_options, gca_section */
