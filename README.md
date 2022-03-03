# FeedbacktoolWorkspace

# INITIAL SET UP

1. CREATE EMPTY WORKSPACE

```
# npm install -g @angular/cli
ng new feedbacktoolWorkspace --create-application=false
```

2. CREATE LIBRARY + INSTALL NODE MODULES

```
cd ./feedbacktoolWorkspace
ng generate library feedback-tool-lib --prefix=dev
cd projects/feedback-tool-lib
npm install
```

3. INITIAL BUILD + NPM LINK

```
# In root directory
ng build
cd dist/feedback-tool-lib
npm link
```

4. ADD EXAMPLE APP + LINK LIB TO EXAMPLE APP

```
# WITH IONIC CLI
ionic start
cd ./[name of ionic app]
npm link feedback-tool-lib
```

5. IMPORT LIB MODULE INTO APP