--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-01-07 19:46:06

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 200 (class 1259 OID 16575)
-- Name: stored; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stored (
    hour integer,
    minute integer,
    angle integer,
    date date DEFAULT now(),
    id bigint NOT NULL
);


ALTER TABLE public.stored OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16580)
-- Name: stored_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stored_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stored_id_seq OWNER TO postgres;

--
-- TOC entry 2990 (class 0 OID 0)
-- Dependencies: 201
-- Name: stored_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stored_id_seq OWNED BY public.stored.id;


--
-- TOC entry 2849 (class 2604 OID 16582)
-- Name: stored id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stored ALTER COLUMN id SET DEFAULT nextval('public.stored_id_seq'::regclass);


--
-- TOC entry 2983 (class 0 OID 16575)
-- Dependencies: 200
-- Data for Name: stored; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stored (hour, minute, angle, date, id) FROM stdin;
11	4	308	2021-01-07	13
9	0	270	2021-01-07	14
11	0	330	2021-01-07	15
12	0	360	2021-01-07	16
12	0	360	2021-01-07	17
12	0	0	2021-01-07	18
11	1	324	2021-01-07	19
11	1	324	2021-01-07	20
11	1	324	2021-01-07	21
11	1	324	2021-01-07	22
11	1	324	2021-01-07	23
11	1	324	2021-01-07	24
11	1	324	2021-01-07	25
3	3	73	2021-01-07	26
18	4	158	2021-01-07	12
3	4	68	2021-01-07	29
3	5	62	2021-01-07	30
3	6	57	2021-01-07	31
3	9	40	2021-01-07	32
1	2	19	2021-01-07	33
1	3	13	2021-01-07	34
1	4	8	2021-01-07	35
\.


--
-- TOC entry 2991 (class 0 OID 0)
-- Dependencies: 201
-- Name: stored_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stored_id_seq', 35, true);


--
-- TOC entry 2852 (class 2606 OID 16584)
-- Name: stored stored_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stored
    ADD CONSTRAINT stored_pkey PRIMARY KEY (id);


-- Completed on 2021-01-07 19:46:06

--
-- PostgreSQL database dump complete
--

