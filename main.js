//objeto
const linksSocialMedia = {
  github: 'PedroAugusto2305', //variavel
  youtube: 'UCYO8E87k5MSFmtEFqvf4cEw',
  facebook: 'pedro.augusto.397948',
  instagram: 'eupedro.augusto1',
  twitter: '@PedroAu75398128'
}

//DOM
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

//API github
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
