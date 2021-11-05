// Single Responsibility Principle

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }

  //
  // Порушує принцип Single Responsibility Principle тому що в цьому принципі кожний клас повинен відповідати щось одне.
  //
  // toHTML() {
  //   return `
  //     <div class="news">
  //       <h1>${this.title}</h1>
  //       <p>${this.text}</p>
  //     </div>
  //   `;
  // }

  // toJSON() {
  //   return JSON.stringify({
  //     title: this.title,
  //     text: this.text,
  //     modified: this.modified
  //   }, null, 2);
  // }
}

const news = new News('Barcelona failed', 'Barcelona do not have a coach.');

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `;
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 2);
  }
}

const printer = new NewsPrinter(news);
console.log(printer.html());
console.log(printer.json());
