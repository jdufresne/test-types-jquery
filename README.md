# test-types-jquery

```console
$ npm i
$ npx tsc
```

Actual:

```
test.ts:5:21 - error TS2345: Argument of type 'JQuery<HTMLElement>' is not assignable to parameter of type 'string | Element | Document | Text | Comment | DocumentFragment | Element[] | JQuery<Node> | ((this: HTMLElement, index: number, oldhtml: string) => string | ... 6 more ... | JQuery<...>)'.
  Type 'JQuery<HTMLElement>' is not assignable to type 'JQuery<Node>'.
    Types of property 'bind' are incompatible.
      Type '{ <TType extends string, TData>(eventType: TType, eventData: TData, handler: TypeEventHandler<HTMLElement, TData, HTMLElement, HTMLElement, TType>): JQuery<...>; <TType extends string>(eventType: TType, handler_preventBubble: false | ... 2 more ... | undefined): JQuery<...>; (events: TypeEventHandlers<...>): JQuery<...' is not assignable to type '{ <TType extends string, TData>(eventType: TType, eventData: TData, handler: TypeEventHandler<Node, TData, Node, Node, TType>): JQuery<...>; <TType extends string>(eventType: TType, handler_preventBubble: false | ... 2 more ... | undefined): JQuery<...>; (events: TypeEventHandlers<...>): JQuery<...>; (name: EventMap...'.
        Types of parameters 'callback' and 'callback' are incompatible.
          Types of parameters 'config' and 'config' are incompatible.
            Type 'TablesorterConfigurationStore<HTMLElement>' is not assignable to type 'TablesorterConfigurationStore<Node>'.
              The types of 'widgetOptions.filter_hideFilters' are incompatible between these types.
                Type 'boolean | ((config: TablesorterConfigurationStore<HTMLElement>) => boolean) | undefined' is not assignable to type 'boolean | ((config: TablesorterConfigurationStore<Node>) => boolean) | undefined'.
                  Type '(config: TablesorterConfigurationStore<HTMLElement>) => boolean' is not assignable to type 'boolean | ((config: TablesorterConfigurationStore<Node>) => boolean) | undefined'.
                    Type '(config: TablesorterConfigurationStore<HTMLElement>) => boolean' is not assignable to type '(config: TablesorterConfigurationStore<Node>) => boolean'.
                      Types of parameters 'config' and 'config' are incompatible.
                        Type 'TablesorterConfigurationStore<Node>' is not assignable to type 'TablesorterConfigurationStore<HTMLElement>'.
                          The types of '$table.bind' are incompatible between these types.
                            Type '{ <TType extends string, TData>(eventType: TType, eventData: TData, handler: TypeEventHandler<Node, TData, Node, Node, TType>): JQuery<...>; <TType extends string>(eventType: TType, handler_preventBubble: false | ... 2 more ... | undefined): JQuery<...>; (events: TypeEventHandlers<...>): JQuery<...>; (name: EventMap...' is not assignable to type '{ <TType extends string, TData>(eventType: TType, eventData: TData, handler: TypeEventHandler<HTMLElement, TData, HTMLElement, HTMLElement, TType>): JQuery<...>; <TType extends string>(eventType: TType, handler_preventBubble: false | ... 2 more ... | undefined): JQuery<...>; (events: TypeEventHandlers<...>): JQuery<...'.
                              Types of parameters 'handler' and 'handler' are incompatible.
                                Types of parameters 't' and 't' are incompatible.
                                  Type 'TriggeredEvent<Node, any, Node, Node>' is not assignable to type 'TriggeredEvent<HTMLElement, any, HTMLElement, HTMLElement>'.
                                    Type 'Node' is not assignable to type 'HTMLElement'.

5 $oldDiv.replaceWith($newForm);
                      ~~~~~~~~


Found 1 error in test.ts:5
```

Expected:

Compiles with no errors.
