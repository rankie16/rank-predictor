document.addEventListener('DOMContentLoaded', function() {
    const examSelect = document.getElementById('exam');
    const specificationSelect = document.getElementById('specification');
    
    examSelect.addEventListener('change', function() {
        const exam = examSelect.value;
        let options = [];
        
        switch (exam) {
            case 'hpcl':
                options = [
                    { value: 'civil', text: 'Civil' },
                    { value: 'mechanical', text: 'Mechanical' },
                    { value: 'instrumentation', text: 'Instrumentation' },
                    { value: 'electrical', text: 'Electrical' }
                ];
                break;
            case 'nfl':
                options = [
                    { value: 'civil', text: 'Civil' },
                    { value: 'mechanical', text: 'Mechanical' },
                    { value: 'instrumentation', text: 'Instrumentation' },
                    { value: 'electrical', text: 'Electrical' }
                    { value: 'chemical', text: 'Chemical' }
                ];
                break;
            case 'gate':
                options = [
                    { value: 'civil', text: 'Civil' },
                    { value: 'mechanical', text: 'Mechanical' },
                    { value: 'instrumentation', text: 'Instrumentation' },
                    { value: 'electrical', text: 'Electrical' },
                    { value: 'cs', text: 'Computer Science' }
                ];
                break;
        }
        
        specificationSelect.innerHTML = '<option value="" disabled selected>Select a specification</option>';
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            specificationSelect.appendChild(opt);
        });
    });
    
    document.getElementById('rankForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const exam = examSelect.value;
        const specification = specificationSelect.value;
        const score = parseFloat(document.getElementById('score').value);

        let rank, interviewStatusClass, interviewStatus;

        if (!exam || !specification || isNaN(score)) {
            rank = "Please complete all fields.";
            interviewStatus = "";
            interviewStatusClass = "";
        } else {
            if (exam === 'hpcl') {
                if (specification === 'civil') {
                    rank = score >= 130 ? "Top 1%" : score >= 120 ? "Top 10%" :score >= 100 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 100 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 100 ? "selected" : "not-selected";
                } else if (specification === 'mechanical') {
                    rank = score >= 120 ? "Top 1%" : score >= 100 ? "Top 10%" : score >= 90 ? "Top 40%" :"Below 40%";
                    interviewStatus = score >= 95 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 95 ? "selected" : "not-selected";
                } else if (specification === 'instrumentation') {
                    rank = score >= 120 ? "Top 1%" : score >= 100 ? "Top 10%" :score >= 90 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 90 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 90 ? "selected" : "not-selected";
                } else if (specification === 'electrical') {
                    rank = score >= 120 ? "Top 1%" : score >= 100 ? "Top 10%" : score >= 90 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 95 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 95 ? "selected" : "not-selected";
                }
            } else if (exam === 'nfl') {
                if (specification === 'civil') {
                    rank = score >= 140 ? "Top 1%" : score >= 130 ? "Top 10%" : score >= 120 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 120 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 120 ? "selected" : "not-selected";
                } else if (specification === 'mechanical') {
                    rank = score >= 140 ? "Top 1%" : score >= 130 ? "Top 10%" :score >= 125 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 125 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 125 ? "selected" : "not-selected";
                } else if (specification === 'instrumentation') {
                    rank = score >= 120 ? "Top 1%" : score >= 100 ? "Top 10%" : score >= 90 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 90 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 90 ? "selected" : "not-selected";
                } else if (specification === 'electrical') {
                    rank = score >= 140 ? "Top 1%" : score >= 130 ? "Top 10%" : score >= 120 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 120 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 120 ? "selected" : "not-selected";
                }
                  else if (specification === 'chemical') {
                    rank = score >= 125 ? "Top 1%" : score >= 110 ? "Top 10%" : score >= 90 ? "Top 40%" : "Below 40%";
                    interviewStatus = score >= 95 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 95? "selected" : "not-selected";
                }
            } else if (exam === 'gate') {
                if (specification === 'civil') {
                    rank = score >= 70 ? "Top 1%" : score >= 60 ? "Top 10%" : "Below 10%";
                    interviewStatus = score >= 60 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 60 ? "selected" : "not-selected";
                } else if (specification === 'mechanical') {
                    rank = score >= 75 ? "Top 1%" : score >= 65 ? "Top 10%" : "Below 10%";
                    interviewStatus = score >= 65 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 65 ? "selected" : "not-selected";
                } else if (specification === 'instrumentation') {
                    rank = score >= 68 ? "Top 1%" : score >= 58 ? "Top 10%" : "Below 10%";
                    interviewStatus = score >= 58 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 58 ? "selected" : "not-selected";
                } else if (specification === 'electrical') {
                    rank = score >= 72 ? "Top 1%" : score >= 62 ? "Top 10%" : "Below 10%";
                    interviewStatus = score >= 62 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 62 ? "selected" : "not-selected";
                } else if (specification === 'cs') {
                    rank = score >= 80 ? "Top 1%" : score >= 70 ? "Top 10%" : "Below 10%";
                    interviewStatus = score >= 70 ? "Selected for Interview" : "Not Selected for Interview";
                    interviewStatusClass = score >= 70 ? "selected" : "not-selected";
                }
            }
        }

        document.getElementById('result').textContent = `Predicted Rank: ${rank}`;
        const interviewStatusElement = document.getElementById('interviewStatus');
        interviewStatusElement.textContent = interviewStatus;
        interviewStatusElement.className = interviewStatusClass; // Apply the class for styling
    });
});
