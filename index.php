<?php
include_once './views/DOCTYPE.inc.php';
include_once './views/HEAD.inc.php';
?>

<!-- Wrapper for presentation purposes -->
<div class="wrapper">

    <!--  Here starts The Calculator -->
    <div class="c_calc c_calc_frame">

        <!-- Output display -->
        <section class="c_calc__display">

            <!-- User input -->
            <div class="c_calc__display__input" data-result="0" data-operation="+" data-second="">
                <span>365</span>
                <span>x</span>
                <span>4</span>
                <span>=</span>
            </div>

            <!-- Output of an artithmetic operation -->
            <div class="c_calc__display__output">
                <span>1,460</span>
            </div>

        </section>

        <!-- Buttons -->
        <section class="c_calc__panel">

            <!-- Row 1 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__tertiary">AC</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__tertiary c_calc__btn--large">SAVE</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary">yy</button>
                </div>
            </div>

            <!-- Row 2 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">.</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">0</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">&nbsp;</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary">x</button>
                </div>
            </div>

            <!-- Row 3 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">1</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary c_calc__btn--selected">2</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">3</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary">-</button>
                </div>
            </div>

            <!-- Row 4 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">4</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">5</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">6</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary">+</button>
                </div>
            </div>

            <!-- Row 5 -->
            <div class="c_calc__panel__row">
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">7</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">8</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__primary">9</button>
                </div>
                <div class="c_calc__panel__btn">
                    <button class="c_calc__btn c_calc__btn__secondary">=</button>
                </div>
            </div>

        </section>

    </div>

</div>

<?php
include_once './views/FOOTER.inc.php';
?>
