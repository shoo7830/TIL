# Develop tip

## Changes all leading tabs to spaces, or all leading spaces to tabs in atom
1. install plugin space-tab
2.Bring up the command palate and search for `Space Tab: Convert to Tabs` or `Space Tab: Convert to Spaces`
3. `ctrl + alt + ]` converts spaces to tabs. `ctrl + alt + [` converts tabs to spaces

## Delete symbolic link
~~~
rm delete-symobolic-link-name
~~~

## Search for specific words
~~~
find ./ -name '*.*' | egrep -v svn | xargs grep --color=auto "찾는 단어"
~~~

## Cursor
* css cursor
~~~ css
.auto            { cursor: auto; }
.default         { cursor: default; }
.none            { cursor: none; }
.context-menu    { cursor: context-menu; }
.help            { cursor: help; }
.pointer         { cursor: pointer; }
.progress        { cursor: progress; }
.wait            { cursor: wait; }
.cell            { cursor: cell; }
.crosshair       { cursor: crosshair; }
.text            { cursor: text; }
.vertical-text   { cursor: vertical-text; }
.alias           { cursor: alias; }
.copy            { cursor: copy; }
.move            { cursor: move; }
.no-drop         { cursor: no-drop; }
.not-allowed     { cursor: not-allowed; }
.all-scroll      { cursor: all-scroll; }
.col-resize      { cursor: col-resize; }
.row-resize      { cursor: row-resize; }
.n-resize        { cursor: n-resize; }
.e-resize        { cursor: e-resize; }
.s-resize        { cursor: s-resize; }
.w-resize        { cursor: w-resize; }
.ns-resize       { cursor: ns-resize; }
.ew-resize       { cursor: ew-resize; }
.ne-resize       { cursor: ne-resize; }
.nw-resize       { cursor: nw-resize; }
.se-resize       { cursor: se-resize; }
.sw-resize       { cursor: sw-resize; }
.nesw-resize     { cursor: nesw-resize; }
.nwse-resize     { cursor: nwse-resize; }
~~~

* custom cursor
~~~ css
// latest IE is not working
.custom {
   cursor: url(images/my-cursor.png), auto;
}
~~~

