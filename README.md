# Extended Objection Query Builder

An extended query builder for Objection.js

# Methods

## whereLike(columns = [], value)

Search for results that **contains** the specified value at the specifieds columns.  

```
Important:  

Working only with postgres because of the use o `unaccent`function.  
To use it you need to activate this is the `unaccent`. For this just ran the following:
``'

```
CREATE EXTENSION unaccent;
```