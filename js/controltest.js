/*
* Author: Callum McLeman
* Assignment: WE41 Mobile Web Applications, Digital Skills Academy
YourFirstname_YourFamilyname_WE41_MWA_2.zip
* Date : 2016/08/29
* Refs: (DSA course units)

*/

var myModule = angular.module("myModule",[]);
//  the [] is to contain other modules ! this module will inherit
// properties and methods from those that are passed!
//  good practice to put 'myModule' in the <body ng-app="myModule"> 
//Can go any where BEFORE you use the ng-controller="myController"  directive!


//angular.module("myModule",[])
//.controller("myController", function ($scope) {

myModule.controller("myController", function ($scope) {
// scope is a service 'injected' into the controller

	//indexHolder = 0;  not needed var is for function only not view
	//$scope.indexHolder = indexHolder;
	toDoText = "";
	$scope.toDoText = toDoText;
	liveEdit = false ;
	// flag for edit of add
	$scope.liveEdit = liveEdit ;
	//edit index holder
	indexToActOn = 0;
	$scope.indexToActOn = indexToActOn ;

	toDoList =[
	    { descrip: 'Get more felt from B&Q'},
	    { descrip: 'Lidl or Aldi'},
	    { descrip: 'Return DVDs to Blockbusters'},
	    ];
	
	$scope.toDoList = toDoList;

	// put on another To Do Item set to array with 'push'
	$scope.moreToDo = function() {
		//  this works like a setter 
	    $scope.toDoList.push(
	    	{
	    		
	    		descrip: $scope.toDoText
	    	}
		
	    );
	    
	   	//go  blank the text input 
	    $scope.initText();

	    return; 
	   
	};

	//edit / replace function
	$scope.upDateTheEdit = function() {
		// replace the description in array..
		//alert($scope.toDoText);
		$scope.toDoList[$scope.indexToActOn].descrip = $scope.toDoText ;
		$scope.liveEdit = false ;
		//go  blank the text input 
	    $scope.initText();
		return;
	};


	// take off data from array with 'splice'
	//  syntax array.splice(index,howmany,item1,.....,itemX) howmany = 0
	//delete method
	$scope.lessToDo = function() {
				
		$scope.toDoList.splice($scope.indexToActOn,1);
		return ;
				
	};

	// new item input mode for the list or the ok caption is 'live' and we add new..
	$scope.addItem = function() {
		if ($('.btnz1 span').text() == "Add") {
			//brand new item - enter 'add' mode
			//show input box 
			$(".input-to-do").show();
			//change the 'add' text to 'ok'
			$('.btnz1 span').text("Ok")
			//hide the edit button
			$(".btnz2").hide();
			// change text 'delete' to 'cancel'
			$('.btnz3 span').text("Cancel");
			$('.btnz3').show();
			//alert('add pressed');
			// blank/init input 
	    	
		} else {
			// ok caption 'live' 
		   	//change the 'ok' text to 'Add'
			//hide the rest...
			$(".input-to-do").hide();
			$('.btnz2').hide();
			//re set the cancel label to delete...
			$('.btnz3 span').text("Delete");
			$('.btnz3').hide();
				
			if ($('.btnz1 span').text() == "Ok") {
				// do the update if edit
				//alert($scope.liveEdit);
				//alert($scope.indexToActOn);
				if ($scope.liveEdit) {
					//else replace edited
					$scope.upDateTheEdit();
						
				} else {

					$scope.moreToDo();
				}
					

					
			}
			// endif ok label 'active'
			$('.btnz1 span').text("Add");
		}
	};

	// delete or cancel
	$scope.deleteOrCancel = function(){
		if ($('.btnz3 span').text() == "Cancel") {
			// cancel caption 'live'....
			//is a reset
			//hide input box 
			$(".input-to-do").hide();
			//change the 'ok' text to 'Add'
			$('.btnz1 span').text("Add");
			
			// change text 'cancel' to 'Delete'
			$('.btnz3 span').text("Delete");
			$('.btnz1').show();
			// show the other 2
			$('.btnz2').hide();
			$('.btnz3').hide();
			$scope.initText();
		} else {
		  	//  in to the abyss with item show confirmation
		   	/// are you sure to delete modal
		    $('.btnz1 span').text("Add");
			
			// change text 'cancel' to 'Delete'
			$('.btnz3 span').text("Delete");
			$scope.lessToDo();
			//hide the add button
			$('.btnz1').show();
			// show the other 2
			$('.btnz2').hide();
			$('.btnz3').hide();

		}
		//endif delete or cancel
	};

	$scope.editItem = function() {
		/// are you sure to delete modal
		   	
		//alert($scope.indexToActOn);
		$scope.liveEdit = true ;
		$('.btnz1 span').text("Ok");
		//hide the edit
		$('.btnz2').hide();
		// change text 'Delete' to cancel 
		$('.btnz3 span').text("Cancel");
		//show input box 
		$(".input-to-do").show();
	
	};

	$scope.setTheStage = function(indexHolder) {
		// list item has been tapped/clicked... 

		// but are we editing..?  if so liveEidt = true, then tap was a mistake, reset $index to 
		//  $scope.indexToActOn 
		// this little 'hic-cup' I only discovered running PhoneGap Desktop and using my
		// own cellfone for the emulator.   i could not (yet) get an emulator to run fully
		// for this project.

		if ( $scope.liveEdit) {
			//  a tap sets affects the $index - active listitem, need to point back

			$index = $scope.indexToActOn ;
			// and do nothing else....
		} else {
			//hi-lite the selected list item?
			//alert(indexHolder);
			$scope.toDoText = $scope.toDoList[indexHolder].descrip ;
			$scope.indexToActOn = indexHolder ;
			//alert($scope.indexToEdit);
			//hide the add button
			//$('.btnz1').hide();
			$('.btnz1 span').text("Cancel");
			// show the other 2
			$('.btnz2').show();
			$('.btnz3').show();
		}

	};

	$scope.initText = function() {
		$scope.toDoText ="";
		return;
	};

});

