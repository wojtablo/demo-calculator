<?php
include_once './views/DOCTYPE.inc.php';
include_once './views/HEAD.inc.php';
?>

<!-- Wrapper for presentation purposes -->
<div class="wrapper">

    <!--  Here starts The Calculator -->
    <div id="js-calc" class="c_calc c_calc_frame">

        <!-- UI: Output display -->
        <section class="c_calc__display">

            <!-- Output message -->
            <div id="js-userInputNotification" class="c_calc__display__notification"></div>

            <!-- User input -->
            <div id="js-userInput" class="c_calc__display__input js-userInput">
                <span id="js-number1"></span>
                <span id="js-operator"></span>
                <span id="js-number2"></span>
            </div>

            <!-- Output of an artithmetic operation -->
            <div id="js-result" class="c_calc__display__output">0</div>

        </section>

        <!-- UI: Control panel -->
        <section class="c_calc__panel">

            <!-- Row 1 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__tertiary" data-clear>AC</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__tertiary c_calc__btn--large" data-save>SAVE</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary"data-operator="/">÷</button>
                </div>
            </div>

            <!-- Row 2 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">.</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="0">0</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">&nbsp;</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary" data-operator="*">x</button>
                </div>
            </div>

            <!-- Row 3 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="1">1</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="2">2</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary"data-number="3">3</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary" data-operator="-">-</button>
                </div>
            </div>

            <!-- Row 4 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="4">4</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="5">5</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="6">6</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary" data-operator="+">+</button>
                </div>
            </div>

            <!-- Row 5 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="7">7</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="8">8</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary" data-number="9">9</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary" data-resolve>=</button>
                </div>
            </div>

        </section>

    </div>

</div>

<?php
include_once './views/FOOTER.inc.php';
?>
