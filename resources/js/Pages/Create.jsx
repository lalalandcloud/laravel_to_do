import { useForm } from "@inertiajs/react";
import React from "react"

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        state: false,
    });

    function submit(e) {
        e.preventDefault();
        post("/store");
    }

    return (
        <form onSubmit={submit}>
            <input 
                className="new_task"
                type="text"
                value={data.name}
                placeholder="Name"
                onChange={(e) => setData("name", e.target.value)}
            />
            {errors.name && <div>{errors.name}</div>}

            <button className="btn_add_a" type="submit" disabled={processing}>
                Créer
            </button>
        </form>
    );
}