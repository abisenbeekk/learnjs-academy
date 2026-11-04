$(document).ready(function () {
    initMultiStepForm();

    function initMultiStepForm() {
        const $steps = $(".form-step");

        if (!$steps.length) {
            return;
        }

        const $form = $steps.first().closest("form");

        const $nextBtn = $form.find('[id="nextBtn"]');
        const $backBtn = $form.find('[id="backBtn"]');
        const $submitBtn = $form.find('[id="submitBtn"]');

        let currentStep = 0;

        function updateStepView() {
            $steps.hide().eq(currentStep).show();

            $backBtn.toggle(currentStep > 0);

            const isLastStep = currentStep === $steps.length - 1;
            $nextBtn.toggle(!isLastStep);
            $submitBtn.toggle(isLastStep);
        }

        function currentStepIsValid() {
            const currentStepElement = $steps.get(currentStep);
            const requiredFields = currentStepElement.querySelectorAll(
                "input[required], select[required], textarea[required]"
            );

            for (const field of requiredFields) {
                if (!field.checkValidity()) {
                    field.reportValidity();
                    return false;
                }
            }

            return true;
        }

        $nextBtn.on("click", function (event) {
            event.preventDefault();

            if (currentStepIsValid() && currentStep < $steps.length - 1) {
                currentStep++;
                updateStepView();
            }
        });

        $backBtn.on("click", function (event) {
            event.preventDefault();

            if (currentStep > 0) {
                currentStep--;
                updateStepView();
            }
        });

        updateStepView();
    }
});