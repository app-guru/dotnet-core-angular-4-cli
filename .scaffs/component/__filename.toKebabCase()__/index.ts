export { <%= (componentname.toString().length > 0) ? componentname.toProperCase() : filename.toProperCase() %>Component } from  './<%= filename.toKebabCase() %>.component';
