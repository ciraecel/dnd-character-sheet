// Function to update character information display
function updateCharacterInfo() {
    const characterName = document.getElementById('character-name-input').value;
    const level = document.getElementById('level').value;
    const race = document.getElementById('race-heritage').value;
    const classType = document.getElementById('class').value;
    const gender = document.getElementById('gender').value;
    const genderOther = document.getElementById('gender-other').value;

    const displayGender = gender === 'other' ? genderOther : gender;

    document.getElementById('character-name').textContent = characterName || 'Character Name';
    document.getElementById('character-level').textContent = `Level: ${level || '1'}`;
    document.getElementById('character-race').textContent = `Race: ${race || 'Human'}`;
    document.getElementById('character-class').textContent = `Class: ${classType || 'Warrior'}`;
    document.getElementById('character-gender').textContent = `Gender: ${displayGender || 'Not Specified'}`;
}

// Show or hide gender-other input based on selection
document.getElementById('gender').addEventListener('change', function() {
    const genderValue = this.value;
    const genderOtherInput = document.getElementById('gender-other');

    if (genderValue === 'other') {
        genderOtherInput.style.display = 'block';
    } else {
        genderOtherInput.style.display = 'none';
        genderOtherInput.value = ''; // Clear the text field when not 'other'
    }

    updateCharacterInfo(); // Update character info when gender is changed
});

// Add event listeners to update character info dynamically
document.getElementById('character-name-input').addEventListener('input', updateCharacterInfo);
document.getElementById('level').addEventListener('input', updateCharacterInfo);
document.getElementById('race-heritage').addEventListener('input', updateCharacterInfo);
document.getElementById('class').addEventListener('change', updateCharacterInfo);
document.getElementById('gender-other').addEventListener('input', updateCharacterInfo);

// Initialize character info display on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load data from local storage
    const savedData = JSON.parse(localStorage.getItem('characterData')) || {};

    // Populate the form with saved data
    document.getElementById('player-name').value = savedData.playerName || '';
    document.getElementById('campaign-id').value = savedData.campaignId || '';
    document.getElementById('character-name-input').value = savedData.characterName || '';
    document.getElementById('race-heritage').value = savedData.raceHeritage || '';
    document.getElementById('gender').value = savedData.gender || '';
    document.getElementById('gender-other').value = savedData.genderOther || '';
    document.getElementById('class').value = savedData.classType || '';
    document.getElementById('level').value = savedData.level || '';
    document.getElementById('background').value = savedData.background || '';
    document.getElementById('alignment').value = savedData.alignment || '';
    document.getElementById('description').value = savedData.description || '';
    document.getElementById('personality-trait1').value = savedData.personalityTrait1 || '';
    document.getElementById('ideal').value = savedData.ideal || '';
    document.getElementById('personality-trait2').value = savedData.personalityTrait2 || '';
    document.getElementById('bond').value = savedData.bond || '';
    document.getElementById('flaw').value = savedData.flaw || '';
    document.getElementById('background-feature').value = savedData.backgroundFeature || '';
    document.getElementById('strength').value = savedData.strength || '';
    document.getElementById('dexterity').value = savedData.dexterity || '';
    document.getElementById('constitution').value = savedData.constitution || '';
    document.getElementById('intelligence').value = savedData.intelligence || '';
    document.getElementById('wisdom').value = savedData.wisdom || '';
    document.getElementById('charisma').value = savedData.charisma || '';

    // Load image from local storage
    const imageSrc = savedData.image || '';
    if (imageSrc) {
        const preview = document.getElementById('image-preview');
        preview.innerHTML = `<img src="${imageSrc}" alt="Character Image" style="max-width: 100%;">`;
    }

    // Update the character info display
    updateCharacterInfo();
});

// Existing event listener for image upload
document.getElementById('image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const preview = document.getElementById('image-preview');
        preview.innerHTML = `<img src="${e.target.result}" alt="Character Image" style="max-width: 100%;">`;

        // Save image data to local storage
        const savedData = JSON.parse(localStorage.getItem('characterData')) || {};
        savedData.image = e.target.result;
        localStorage.setItem('characterData', JSON.stringify(savedData));
    };

    reader.readAsDataURL(file);
});

// Existing event listener for save button
document.getElementById('save-button').addEventListener('click', function() {
    const playerName = document.getElementById('player-name').value;
    const campaignId = document.getElementById('campaign-id').value;
    const characterName = document.getElementById('character-name-input').value;
    const raceHeritage = document.getElementById('race-heritage').value;
    const gender = document.getElementById('gender').value;
    const genderOther = document.getElementById('gender-other').value;
    const classType = document.getElementById('class').value;
    const level = document.getElementById('level').value;
    const background = document.getElementById('background').value;
    const alignment = document.getElementById('alignment').value;
    const description = document.getElementById('description').value;
    const personalityTrait1 = document.getElementById('personality-trait1').value;
    const ideal = document.getElementById('ideal').value;
    const personalityTrait2 = document.getElementById('personality-trait2').value;
    const bond = document.getElementById('bond').value;
    const flaw = document.getElementById('flaw').value;
    const backgroundFeature = document.getElementById('background-feature').value;
    const strength = document.getElementById('strength').value;
    const dexterity = document.getElementById('dexterity').value;
    const constitution = document.getElementById('constitution').value;
    const intelligence = document.getElementById('intelligence').value;
    const wisdom = document.getElementById('wisdom').value;
    const charisma = document.getElementById('charisma').value;

    // Save data to local storage
    localStorage.setItem('characterData', JSON.stringify({
        playerName,
        campaignId,
        characterName,
        raceHeritage,
        gender: gender === 'other' ? genderOther : gender,
        genderOther,
        classType,
        level,
        background,
        alignment,
        description,
        personalityTrait1,
        ideal,
        personalityTrait2,
        bond,
        flaw,
        backgroundFeature,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        image: document.querySelector('#image-preview img')?.src || '' // Save image URL
    }));

    alert('Character saved!');
});

