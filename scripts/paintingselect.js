import { paintings } from "./paintings.js"

export function rotateHeaderImages() {
  const randomPainting = Math.floor(Math.random() * paintings.length)
  const header = document.querySelector("#header")
  const headerTitle = header.querySelector("h1")
  const headerSubtitle = header.querySelector("h2")
  const headerText1 = header.querySelector("#header-text-1")
  const footer = document.querySelector("#footer")
  const middle = document.querySelector("#background-div")
  const preview = document.querySelector("#painting-preview")
  const title = document.querySelector("#painting-title")
  const artist = document.querySelector("#painting-artist")
  const midPageText = document.querySelectorAll(".mid-page-texts")

  const keys = Object.keys(paintings[randomPainting])
  //filter keys not to print from paintings.js in footer
  const filteredKeys = keys.filter(
    string =>
      string !== "id" &&
      string !== "url" &&
      string !== "rsarchive" &&
      string !== "tone"
  )
  header.style.backgroundImage = `url(${paintings[randomPainting].url})`
  footer.style.backgroundImage = `url(${paintings[randomPainting].url})`
  middle.style.backgroundImage = `url(${paintings[randomPainting].url})`
  preview.style.backgroundImage = `url(${paintings[randomPainting].url})`
  preview.href = paintings[randomPainting].rsarchive
  title.innerText = paintings[randomPainting].title
  artist.innerText = `by ${paintings[randomPainting].artist}`
  if (paintings[randomPainting].tone === "light") {
    headerTitle.classList.add("dark-header-text")
    headerSubtitle.classList.add("dark-header-text")
    headerText1.classList.add("dark-header-text")
    midPageText.forEach(text => {
      text.classList.add("dark-header-text")
    })
  }
  if (paintings[randomPainting].tone === "dark") {
    headerTitle.classList.add("light-header-text")
    headerSubtitle.classList.add("light-header-text")
    headerText1.classList.add("light-header-text")
    midPageText.forEach(text => {
      text.classList.add("light-header-text")
    })
  }

  filteredKeys.forEach(key => {
    if (!paintings[randomPainting][key]) return
    const keyParagraph = document.createElement("p")
    const valueParagraph = document.createElement("p")
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1)
    keyParagraph.innerText = `${capitalizedKey}:`
    valueParagraph.innerText = paintings[randomPainting][key]
    // footer.footer-painting-link = paintings[randomPainting][key]["rsarchive"]
  })
}
