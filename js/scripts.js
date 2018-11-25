var memorize = (function (memorize) {

    memorize.logic = (function (logic) {

        // --------------------------------------------------------------------------------
        // Private properties
        // --------------------------------------------------------------------------------

        var gameDifficulty  = {
            Easy: 1,
            Medium: 2,
            Hard: 3,
		};

        // --------------------------------------------------------------------------------
        // DOM objects
        // --------------------------------------------------------------------------------

        // Options
        
        var $ACButton = $('#ACButton');
        
        // Input Group - Operand 1

        var $operand1Decimal = $('#operand1Decimal');

        // --------------------------------------------------------------------------------
        // Private functions
        // --------------------------------------------------------------------------------
        function Init() {

        }

        Init();

        // GUI Logic

        function startGame() {
        	close();
        	$(".inGame").addClass("active");
        }

        function openMainMenu() {
        	close();
        	$(".mainMenu").addClass("active");
        }

        function openOptionMenu() {
        	close();
        	$(".optionsMenu").addClass("active");
        }

        function close() {
        	$(".mainMenu").removeClass("active");
        	$(".optionsMenu").removeClass("active");
        	$(".inGame").removeClass("active");
        }

        // Click Handlers

        $( "#BTNStartGame" ).click(function() {
			startGame();
		});

		$( "#BTNOptions" ).click(function() {
			openOptionMenu();
		});

		$( "#BTNCredits" ).click(function() {
			
		});

        return logic;

    }(memorize.logic || {}));

    return memorize;

}(memorize || {}));