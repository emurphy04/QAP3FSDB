-- Table: public.menu_items

-- DROP TABLE IF EXISTS public.menu_items;

CREATE TABLE IF NOT EXISTS public.menu_items
(
    id integer NOT NULL,
    itemname character varying(50) COLLATE pg_catalog."default",
    price double precision,
    alergy boolean,
    CONSTRAINT menu_items_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.menu_items
    OWNER to postgres;