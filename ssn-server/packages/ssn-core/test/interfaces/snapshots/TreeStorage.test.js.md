# Snapshot report for `test/interfaces/TreeStorage.test.js`

The actual snapshot is saved in `TreeStorage.test.js.snap`.

Generated by [AVA](https://avajs.dev).

## should add an observation without creating a new page

> Snapshot 1

    `<https://www.example.com/Feature1/ObservableProperty1/member/2020-04-01T11:30:45.909Z.ttl> a <http://www.w3.org/ns/sosa/Observation>␊
    ;␊
        <http://www.w3.org/ns/sosa/hasSimpleResult> "123"^^<http://www.w3.org/2001/XMLSchema#integer>␊
    .␊
    <https://www.example.com/Feature1/ObservableProperty1Series> <https://w3id.org/tree#member> <https://www.example.com/Feature1/ObservableProperty1/member/2020-04-01T11:30:45.909Z.ttl>␊
    .␊
    `

## should create a new page when adding a new observation

> Snapshot 1

    `<https://www.example.com/Feature1/ObservableProperty1/member/2020-04-01T11:30:45.909Z.ttl> a <http://www.w3.org/ns/sosa/Observation>␊
    ;␊
        <http://www.w3.org/ns/sosa/hasSimpleResult> "123"^^<http://www.w3.org/2001/XMLSchema#integer>␊
    ;␊
        <http://www.w3.org/ns/sosa/resultTime> "2020-04-01T10:30:45.909Z"^^<http://www.w3.org/2001/XMLSchema#dateTime>␊
    .␊
    <https://www.example.com/Feature1/ObservableProperty1Series> <https://w3id.org/tree#member> <https://www.example.com/Feature1/ObservableProperty1/member/2020-04-01T11:30:45.909Z.ttl>␊
    .␊
    `

## should create an intial page when the are no files in the data folder

> Snapshot 1

    `<https://www.example.com/Feature1> a <http://www.w3.org/ns/sosa/FeatureOfInterest>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series> a <https://w3id.org/tree#collection>;␊
        <https://w3id.org/tree#view> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:30:45.909Z>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:30:45.909Z> a <https://w3id.org/tree#Node>.␊
    `

## should load the existing files from the folder in the tree

> Snapshot 1

    `<https://www.example.com/Feature1> a <http://www.w3.org/ns/sosa/FeatureOfInterest>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series> a <https://w3id.org/tree#collection>;␊
        <http://rdfs.org/ns/void#subset> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:20:45.909Z>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:20:45.909Z> a <https://w3id.org/tree#Node>.␊
    `

> Snapshot 2

    `<https://www.example.com/Feature1> a <http://www.w3.org/ns/sosa/FeatureOfInterest>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series> a <https://w3id.org/tree#collection>;␊
        <http://rdfs.org/ns/void#subset> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:27:45.909Z>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:27:45.909Z> a <https://w3id.org/tree#Node>.␊
    `

> Snapshot 3

    `<https://www.example.com/Feature1> a <http://www.w3.org/ns/sosa/FeatureOfInterest>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series> a <https://w3id.org/tree#collection>;␊
        <https://w3id.org/tree#view> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:22:45.909Z>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:22:45.909Z> a <https://w3id.org/tree#Node>;␊
        <https://w3id.org/tree#relation> _:tree-left.␊
    _:tree-left a <https://w3id.org/tree#LessThanRelation>;␊
        <https://w3id.org/tree#Node> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:20:45.909Z>;␊
        <https://w3id.org/tree#path> <http://www.w3.org/ns/sosa/resultTime>;␊
        <https://w3id.org/tree#value> "2020-04-01T10:22:45.909Z"^^<http://www.w3.org/2001/XMLSchema#dateTime>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:22:45.909Z> <https://w3id.org/tree#relation> _:tree-right.␊
    _:tree-right a <https://w3id.org/tree#GreaterOrEqualThanRelation>;␊
        <https://w3id.org/tree#Node> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:25:45.909Z>;␊
        <https://w3id.org/tree#path> <http://www.w3.org/ns/sosa/resultTime>;␊
        <https://w3id.org/tree#value> "2020-04-01T10:25:45.909Z"^^<http://www.w3.org/2001/XMLSchema#dateTime>.␊
    `

> Snapshot 4

    `<https://www.example.com/Feature1> a <http://www.w3.org/ns/sosa/FeatureOfInterest>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series> a <https://w3id.org/tree#collection>;␊
        <http://rdfs.org/ns/void#subset> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:25:45.909Z>.␊
    <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:25:45.909Z> a <https://w3id.org/tree#Node>;␊
        <https://w3id.org/tree#relation> _:tree-right.␊
    _:tree-right a <https://w3id.org/tree#GreaterOrEqualThanRelation>;␊
        <https://w3id.org/tree#Node> <https://www.example.com/Feature1/ObservableProperty1Series/2020-04-01T10:27:45.909Z>;␊
        <https://w3id.org/tree#path> <http://www.w3.org/ns/sosa/resultTime>;␊
        <https://w3id.org/tree#value> "2020-04-01T10:27:45.909Z"^^<http://www.w3.org/2001/XMLSchema#dateTime>.␊
    `
