export interface Updatable {
  updated: any;
}

// export class UpdatableProp<T> {
//   public parent: Updatable;
//   public key: string;

//   constructor(protected value: T) {
//   }

//   get () {
//     return this.value;
//   }

//   set (value: T) {
//     this.value = value;
//     if (this.parent)
//       this.parent.updated[this.key] = value;
//   }
// }

// export interface ArticleInterface extends Updatable {
//   _id?: UpdatableProp<string>
//   author?: UpdatableProp<string>
//   title?: UpdatableProp<string>
//   completed?: UpdatableProp<boolean>
//   published?: UpdatableProp<boolean>
//   text?: UpdatableProp<string>
//   created_at?: UpdatableProp<string>
//   updated_at?: UpdatableProp<string>
// };

// export class Article implements ArticleInterface{
//   constructor(protected internal: ArticleInterface, public updated: any = {}) {
//   }

//   _id?: UpdatableProp<string>
//   author?: UpdatableProp<string>
//   title?: UpdatableProp<string>
//   completed?: UpdatableProp<boolean>
//   published?: UpdatableProp<boolean>
//   text?: UpdatableProp<string>
//   created_at?: UpdatableProp<string>
//   updated_at?: UpdatableProp<string>
// }

export interface ArticleInterface extends Updatable {
  _id?: string
  author?: string
  title?: string
  completed?: boolean
  published?: boolean
  text?: string
  created_at?: string
  updated_at?: string
};

export class Article implements ArticleInterface {
  constructor(protected internal: ArticleInterface, public updated: any = {}) {
  }

  set _id(value: string) { this.updated._id = value; this.internal._id = value; }
  set author(value: string) { this.updated.author = value; this.internal.author = value; }
  set title(value: string) { this.updated.title = value; this.internal.title = value; }
  set completed(value: boolean) { this.updated.completed = value; this.internal.completed = value; }
  set published(value: boolean) { this.updated.published = value; this.internal.published = value; }
  set text(value: string) { this.updated.text = value; this.internal.text = value; }
  set created_at(value: string) { this.updated.created_at = value; this.internal.created_at = value; }
  set updated_at(value: string) { this.updated.updated_at = value; this.internal.updated_at = value; }

  get _id(): string { return this.internal._id; }
  get author(): string { return this.internal.author; }
  get title(): string { return this.internal.title; }
  get completed(): boolean { return this.internal.completed; }
  get published(): boolean { return this.internal.published; }
  get text(): string { return this.internal.text; }
  get created_at(): string { return this.internal.created_at; }
  get updated_at(): string { return this.internal.updated_at; }
}

/*
function updatable<T, K>(obj: T, key: K) {
    obj["__proto__"]["get " + key] = () => this.internal[key];
    obj["__proto__"]["set " + key] = (value) => { this.updated[key] = value; this.internal[key] = value; };
}

export class Article implements ArticleInterface{
  constructor(public internal: ArticleInterface, public updated: any = {}) {
    updatable(this, "_id");
    updatable(this, "author");
    updatable(this, "title");
    updatable(this, "completed");
    updatable(this, "published");
    updatable(this, "text");
    updatable(this, "created_at");
    updatable(this, "updated_at");

    console.log(this);
  }
}*/