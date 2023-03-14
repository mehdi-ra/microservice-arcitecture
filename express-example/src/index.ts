import 'reflect-metadata';

const MY_METADATA_KEY = Symbol('myMetadataKey');

function myClassDecorator(propertyName: string, options: any) {
  return function <T extends {new (...args: any[]): {}}>(BaseClass: T) {
    Reflect.defineMetadata(MY_METADATA_KEY, options[propertyName], BaseClass.prototype);
  };
}

function myPropertyDecorator(target: any, key: string) {
  const options = Reflect.getMetadata(MY_METADATA_KEY, target.constructor.prototype);
  console.log(options);
}

@myClassDecorator('bar', {bar: 'foo'})
class MyClass {
  @myPropertyDecorator
  bar = '';
}

const myInstance = new MyClass();
