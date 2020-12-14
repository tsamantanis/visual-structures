import React, { Component } from "react";
import hash from "string-hash";
import LinkedList from "../LinkedList/LinkedList.js";

class Hashmap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buckets: [],
            numBuckets: props,
        };
        for (let i = 0; i < props; i++) {
            this.state.buckets.push(new LinkedList());
        }
    }

    insert(keyval) {
        this.state.buckets[
            parseInt(hash(Object.keys(keyval)[0]) % this.state.numBuckets)
        ].append(keyval);
    }

    lookup(key) {
        return this.state.buckets[hash(key) % this.state.numBuckets].search(
            key
        );
    }
}

export default Hashmap;
