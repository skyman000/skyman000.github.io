"use strict";

var orders = [
{
    "ID": 1,
    "Mail": "aldd@dwd.com",
    "FIO": "Егоров Александр Игоревич",
    "Domain": "BANK",
    "Login": "vtb255395",
    "Role": "Администратор",
    "RegDate": "2019/01/13 9:00", 
}, 
{
    "ID": 2,
    "Mail": "aldd@dwd.com",
    "FIO": "Иван Иванов Иванович",
    "Domain": "REGION",
    "Login": "vtb255222",
    "Role": "Пользователь",
    "RegDate": "2019/01/13 9:00",
}, 
{
    "ID": 3,
    "Mail": "aldd@dwd.com",
    "FIO": "Петр Петрович Петоров",
    "Domain": "REGION",
    "Login": "vtb254442",
    "Role": "Пользователь",
    "RegDate": "2016/01/13 9:00",
},
{
    "ID": 4,
    "Mail": "aldd@dwd.com",
    "FIO": "Егоров Александр Игоревич",
    "Domain": "BANK",
    "Login": "vtb255395",
    "Role": "Администратор",
    "RegDate": "2019/01/13 9:00", 
}, 
{
    "ID": 5,
    "Mail": "aldd@dwd.com",
    "FIO": "Иван Иванов Иванович",
    "Domain": "REGION",
    "Login": "vtb255222",
    "Role": "Пользователь",
    "RegDate": "2019/01/13 9:00",
}, 
{
    "ID": 6,
    "Mail": "aldd@dwd.com",
    "FIO": "Петр Петрович Петоров",
    "Domain": "REGION",
    "Login": "vtb254442",
    "Role": "Пользователь",
    "RegDate": "2016/01/13 9:00",
},
{
    "ID": 7,
    "Mail": "aldd@dwd.com",
    "FIO": "Егоров Александр Игоревич",
    "Domain": "BANK",
    "Login": "vtb255395",
    "Role": "Администратор",
    "RegDate": "2019/01/13 9:00", 
}, 
{
    "ID": 8,
    "Mail": "aldd@dwd.com",
    "FIO": "Иван Иванов Иванович",
    "Domain": "REGION",
    "Login": "vtb255222",
    "Role": "Пользователь",
    "RegDate": "2019/01/13 9:00",
}, 
{
    "ID": 9,
    "Mail": "aldd@dwd.com",
    "FIO": "Петр Петрович Петоров",
    "Domain": "REGION",
    "Login": "vtb254442",
    "Role": "Пользователь",
    "RegDate": "2016/01/13 9:00",
},
{
    "ID": 10,
    "Mail": "aldd@dwd.com",
    "FIO": "Егоров Александр Игоревич",
    "Domain": "BANK",
    "Login": "vtb255395",
    "Role": "Администратор",
    "RegDate": "2019/01/13 9:00", 
}, 
{
    "ID": 11,
    "Mail": "aldd@dwd.com",
    "FIO": "Иван Иванов Иванович",
    "Domain": "REGION",
    "Login": "vtb255222",
    "Role": "Пользователь",
    "RegDate": "2019/01/13 9:00",
}, 
{
    "ID": 12,
    "Mail": "aldd@dwd.com",
    "FIO": "Петр Петрович Петоров",
    "Domain": "REGION",
    "Login": "vtb254442",
    "Role": "Пользователь",
    "RegDate": "2016/01/13 9:00",
},
{
    "ID": 13,
    "Mail": "aldd@dwd.com",
    "FIO": "Егоров Александр Игоревич",
    "Domain": "BANK",
    "Login": "vtb255395",
    "Role": "Администратор",
    "RegDate": "2019/01/13 9:00", 
}, 
{
    "ID": 14,
    "Mail": "aldd@dwd.com",
    "FIO": "Иван Иванов Иванович",
    "Domain": "REGION",
    "Login": "vtb255222",
    "Role": "Пользователь",
    "RegDate": "2019/01/13 9:00",
}, 
{
    "ID": 15,
    "Mail": "aldd@dwd.com",
    "FIO": "Петр Петрович Петоров",
    "Domain": "REGION",
    "Login": "vtb254442",
    "Role": "Пользователь",
    "RegDate": "2016/01/13 9:00",
},
{
    "ID": 16,
    "Mail": "aldd@dwd.com",
    "FIO": "Егоров Александр Игоревич",
    "Domain": "BANK",
    "Login": "vtb255395",
    "Role": "Администратор",
    "RegDate": "2019/01/13 9:00", 
}, 
{
    "ID": 17,
    "Mail": "aldd@dwd.com",
    "FIO": "Иван Иванов Иванович",
    "Domain": "REGION",
    "Login": "vtb255222",
    "Role": "Пользователь",
    "RegDate": "2019/01/13 9:00",
}, 
{
    "ID": 18,
    "Mail": "aldd@dwd.com",
    "FIO": "Петр Петрович Петоров",
    "Domain": "REGION",
    "Login": "vtb254442",
    "Role": "Пользователь",
    "RegDate": "2016/01/13 9:00",
},
{
    "ID": 19,
    "Mail": "aldd@dwd.com",
    "FIO": "Егоров Александр Игоревич",
    "Domain": "BANK",
    "Login": "vtb255395",
    "Role": "Администратор",
    "RegDate": "2019/01/13 9:00", 
}, 
{
    "ID": 20,
    "Mail": "aldd@dwd.com",
    "FIO": "Иван Иванов Иванович",
    "Domain": "REGION",
    "Login": "vtb255222",
    "Role": "Пользователь",
    "RegDate": "2019/01/13 9:00",
}, 
{
    "ID": 21,
    "Mail": "aldd@dwd.com",
    "FIO": "Петр Петрович Петоров",
    "Domain": "REGION",
    "Login": "vtb254442",
    "Role": "Пользователь",
    "RegDate": "2016/01/13 9:00",
}

];

window.SaleViewer = window.SaleViewer || {};

$(function(){
	
	var employee = {},
        popup = null,
        popupOptions = {
            width: 700,
            height: 490,
            contentTemplate: function() {
								
                return $("<div style='margin-top: -19px;' />").append(  
                    $("<p>Пользователь:<div id='gridC' /></p>"),
                    $("<p>Роль: <div id='role-select'></div></p>"),
                    $("<div id='icon-done'></div>")
                );
            },
            showTitle: true,
            title: "Добавление", // Редактирование
            visible: false,
            dragEnabled: false,
            closeOnOutsideClick: true
    };
	
    var showInfo = function(data) {
        employee = data;

        if(popup) {
            popup.option("contentTemplate", popupOptions.contentTemplate.bind(this));
        } else {
            popup = $("#popupw").dxPopup(popupOptions).dxPopup("instance");
        }

        popup.show();

				 
				
				var gridC = $("#gridC").dxDataGrid({
					dataSource: orders,
					keyExpr: "ID",
					selection: {
						mode: "single"
					},
					hoverStateEnabled: true,
					showBorders: true,		
					scrolling: {
						mode: "virtual"
					},
					height: 240,
					headerFilter: { // доп фильтр в заголовках
						visible: true,
						allowSearch: true
					},
					filterRow: { // панель поиска в колонках
						visible: true,
						applyFilter: "auto"
					},
					columns: [
					{
						dataField: "FIO",
						caption: "ФИО"
					}, {
						dataField: "Domain",
						caption: "Домен",
						width: 130
					},{
						dataField: "Login",
						caption: "Логин",
						width: 130
					},{
						dataField: "Mail",
						caption: "Почта",
						width: 130
					}]
				});
				
				var simpleProducts = [
					"Администратор",
					"Пользователь"
				];
				
				$("#role-select").dxSelectBox({
					items: simpleProducts,
					placeholder: "Выберите роль пользователя..."
				});
				
				$("#icon-done").dxButton({
					icon: "check",
					type: "success",
					text: "Добавить",
					onClick: function(e) { 
						popup.hide();
					}
				});
				
    };

	
    var dataGrid = $("#gridContainer").dxDataGrid({
        dataSource: orders,
        columnsAutoWidth: true,
        showBorders: true,
		onInitialized: function (e) {
			//var fff = $(".dx-toolbar-items-container").length;
			//alert(fff);
			//var selectBoxReportType = e.component;  
			//console.log(selectBoxReportType._$element);
		},
		onSelectionChanged: function (selectedItems) {
            var data = selectedItems.selectedRowsData[0];
			var keys = dataGrid.getSelectedRowKeys();
			console.log(dataGrid.getRowIndexByKey(keys[0]));
            if(data) {
             //   $(".UserFIO").text(data.FIO);
               // $(".employeePhoto").attr("src", data.Picture);
            }
        },
		onToolbarPreparing: function (e) {
			
			
			var toolbarItems = e.toolbarOptions.items;
		 
			
	toolbarItems.unshift(
			{
                widget: "dxButton", 
                options: { icon: "plus", fontsize:11, text:"Добавить", 
					onClick: function() {  
						var dd = {};
						showInfo(dd);
						var dataSource = dataGrid.getDataSource();
								
							var orders1 = 
							{
								"ID": 111,
								"FIO": "Егоров1 Александр1 Игоревич1",
								"Domain": "BANK",
								"Login": "vtb255395",
								"Role": "Администратор",
								"RegDate": "2019/01/13 9:00", 
							};
					    //dataSource.store().push([
						//	{ type: "insert", data: orders1 }
						//]);
						dataSource.store().insert(orders1).then(function() {
							dataSource.reload();
						})
					} 
				},
                location: "before" 
            },	
			{
                widget: "dxButton", 
                options: { icon: "edit", text:"Изменить", onClick: function() {  } },
                location: "before" 
            },
			{
                widget: "dxButton", 
                options: { icon: "clear", text:"Удалить", 
					onClick: function() { 
						var keys = dataGrid.getSelectedRowKeys();
						var index = dataGrid.getRowIndexByKey(keys[0]);
						dataGrid.deleteRow(index);
					} 
				},
                location: "before" 
            }
			);
			
 //var dataGrid = e.component;
  //var item = e.toolbarOptions.items.find(item => item.name === "addRowButton");  
    //item.options.icon = "edit"; 
/*

{
                location: "before",
                widget: "dxButton",
                options: {
                    text: "Collapse All",
                    width: 136,
                    onClick: function(e) {
                        var expanding = e.component.option("text") === "Expand All";
                        dataGrid.option("grouping.autoExpandAll", expanding);
                        e.component.option("text", expanding ? "Collapse All" : "Expand All");
                    }
                }
            },
			
            // Modifies an existing item
            $.each(toolbarItems, function(_, item) {
                if(item.name === "saveButton") {
                    // Change the item options here
                }
            }); 
 
            
			*/
			/*
            e.toolbarOptions.items.unshift({
                location: "before",
                template: function(){
                    return $("<div/>");
                }
            }, {
                location: "before",
                widget: "dxButton",
                options: {
                    text: "Collapse All",
                    width: 136,
                    onClick: function(e) {
                        var expanding = e.component.option("text") === "Expand All";
                        dataGrid.option("grouping.autoExpandAll", expanding);
                        e.component.option("text", expanding ? "Collapse All" : "Expand All");
                    }
                }
            }, {
                location: "after",
                widget: "dxButton",
                options: {
                    icon: "refresh",
                    onClick: function() {
                        dataGrid.refresh();
                    }
                }
            });*/
        },
		scrolling: {
            mode: "virtual"
        },
		//paging: { // Число строк на одной странице
        //    pageSize: 10
        //}, 
		height: 440,
        filterRow: { // панель поиска в колонках
            visible: true,
            applyFilter: "auto"
        },
        searchPanel: { // панель поиска над таблицей
            visible: true,
            width: 240,
            placeholder: "Поиск по всем полям..."
        },
        headerFilter: { // доп фильтр в заголовках
            visible: true,
			allowSearch: true
        },
		onCellPrepared: function (e) { // после прогрузки таблицы но до загрузки значений
                if (e.column.dataField === "FIO" || e.column.dataField === "Login") {  
                    if (e.rowType == 'header') {  
                        e.cellElement.find(".dx-header-filter").hide();  
                    }  
                }  
        },
		selection: {
            mode: "single"
        },
        columns: [
		{
            dataField: "FIO",
            caption: "ФИО"
        }, {
            dataField: "Domain",
            caption: "Домен",
            width: 130
        },{
            dataField: "Login",
            caption: "Логин",
            width: 130
        },{
            dataField: "Role",
            caption: "Роль",
            width: 130
        },{
            dataField: "RegDate",
            caption: "Дата регистрации",
            alignment: "right",
            dataType: "datetime",
            width: 180,
            format: "M/d/yyyy, HH:mm"
        }]
    }).dxDataGrid('instance');
     
     
    
    function getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }
});
 