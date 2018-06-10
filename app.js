

// formats 'My Previous Experience' section
function displayPosition(coName, title, desc){
  console.log('* ' + title + ' at ' + coName + " - " + desc);
}
//formats 'My SKills' section
function displaySkill(title, BAM){
  var star = '* ';
  if(BAM){
      star += 'BAM: '
  }
  console.log(star + title);
};

// displays name as uppercase
console.log('\nName: ' +  ('drew kiinstler').toUpperCase());

// intro
console.log('Career: Aspiring Full Stack Engineer');
console.log('Description: Cooks like Paula Deen, skinny like James Dean \n');
console.log('\nMy Interests:');
console.log('* Procrastinating \n* Netflixing \n* Eating')

// Displays Experience
console.log('\nMy Previous Experience: ');
displayPosition('Keller Williams','Real Estate Agent','Sold some houses.');
displayPosition('Davis Development','Accounts Manager','Kept up with money.');
displayPosition('Greystar','Leasing Agent','Pushed apartments.');
console.log('\nMy Skills');

// Displays SKills
displaySkill('Kinda JavaScript', false);
displaySkill('Pogo Sticking', true);
displaySkill('Banjo', true);
displaySkill('German', true);
displaySkill('Kinda CSS', false);









