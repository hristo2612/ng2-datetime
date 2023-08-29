# ngx-datetime-16

This library is a continuation of the `ng2-datetime` library by nkalinov, now updated to support Angular v16.

## Dependencies

- [Bootstrap (v3 to v5) **CSS only**](http://getbootstrap.com/)
- [jQuery (v3.3.x to v3.7.0)](http://jquery.com/)
- [Bootstrap-datepicker (v1.6.x to v1.10.x) **(JS+CSS)**](http://eternicode.github.io/bootstrap-datepicker/)
- [Bootstrap-timepicker (v0.5.0 to v0.5.2) **(JS+CSS)**](http://jdewit.github.io/bootstrap-timepicker/)

## Installation

`npm install --save ngx-datetime-16`

## Usage

1. Import the required dependencies in the following order:

   - Bootstrap CSS
   - jQuery
   - bootstrap-timepicker + bootstrap-datepicker

   See [this example](https://github.com/hristo2612/ngx-datetime-16/blob/main/src/vendor.ts#L8) for details.

2. `import { NgxDatetimeModule } from 'ngx-datetime-16';`
3. Add it to your app module's `imports` property

```
@NgModule({
...
imports: [NgxDatetimeModule, ...],
...
})
```

4. Use it in your templates: `<datetime [(ngModel)]="date"></datetime>`

## Acknowledgements

- @jdewit for the [timepicker plugin](https://github.com/jdewit/bootstrap-timepicker)
- @eternicode for the [datepicker plugin](https://github.com/eternicode/bootstrap-datepicker)
- @nkalinov for the original [ng2-datetime](https://github.com/nkalinov/ng2-datetime) library.
- All contributors and users of this library.
