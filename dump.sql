PGDMP     /                     z            shortly %   12.11 (Ubuntu 12.11-0ubuntu0.20.04.1) %   12.11 (Ubuntu 12.11-0ubuntu0.20.04.1) &    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16384    shortly    DATABASE     q   CREATE DATABASE shortly WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';
    DROP DATABASE shortly;
                postgres    false            ?            1259    16397    public.users    TABLE     ?   CREATE TABLE public."public.users" (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(30) NOT NULL
);
 "   DROP TABLE public."public.users";
       public         heap    postgres    false            ?            1259    16395    public.users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."public.users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."public.users_id_seq";
       public          postgres    false    203            ?           0    0    public.users_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."public.users_id_seq" OWNED BY public."public.users".id;
          public          postgres    false    202            ?            1259    16432    sessions    TABLE     ?   CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);
    DROP TABLE public.sessions;
       public         heap    postgres    false            ?            1259    16430    sessions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sessions_id_seq;
       public          postgres    false    207            ?           0    0    sessions_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;
          public          postgres    false    206            ?            1259    16451    urls    TABLE     ?   CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT now()
);
    DROP TABLE public.urls;
       public         heap    postgres    false            ?            1259    16449    urls_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.urls_id_seq;
       public          postgres    false    209            ?           0    0    urls_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;
          public          postgres    false    208            ?            1259    16418    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16416    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    205            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    204                       2604    16400    public.users id    DEFAULT     v   ALTER TABLE ONLY public."public.users" ALTER COLUMN id SET DEFAULT nextval('public."public.users_id_seq"'::regclass);
 @   ALTER TABLE public."public.users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203                       2604    16435    sessions id    DEFAULT     j   ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);
 :   ALTER TABLE public.sessions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207                       2604    16454    urls id    DEFAULT     b   ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);
 6   ALTER TABLE public.urls ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209                       2604    16421    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            ?          0    16397    public.users 
   TABLE DATA           C   COPY public."public.users" (id, name, email, password) FROM stdin;
    public          postgres    false    203   ~)       ?          0    16432    sessions 
   TABLE DATA           D   COPY public.sessions (id, token, "userId", "createdAt") FROM stdin;
    public          postgres    false    207   ?)       ?          0    16451    urls 
   TABLE DATA           X   COPY public.urls (id, url, "shortUrl", "visitCount", "userId", "createdAt") FROM stdin;
    public          postgres    false    209   *       ?          0    16418    users 
   TABLE DATA           G   COPY public.users (id, name, email, password, "createdAt") FROM stdin;
    public          postgres    false    205   ?*       ?           0    0    public.users_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."public.users_id_seq"', 1, false);
          public          postgres    false    202            ?           0    0    sessions_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.sessions_id_seq', 2, true);
          public          postgres    false    206            ?           0    0    urls_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.urls_id_seq', 2, true);
          public          postgres    false    208            ?           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    204            
           2606    16404 #   public.users public.users_email_key 
   CONSTRAINT     c   ALTER TABLE ONLY public."public.users"
    ADD CONSTRAINT "public.users_email_key" UNIQUE (email);
 Q   ALTER TABLE ONLY public."public.users" DROP CONSTRAINT "public.users_email_key";
       public            postgres    false    203                       2606    16441    sessions sessions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public            postgres    false    207                       2606    16443    sessions sessions_token_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);
 E   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_token_key;
       public            postgres    false    207                       2606    16461    urls urls_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.urls DROP CONSTRAINT urls_pkey;
       public            postgres    false    209                       2606    16463    urls urls_shortUrl_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");
 B   ALTER TABLE ONLY public.urls DROP CONSTRAINT "urls_shortUrl_key";
       public            postgres    false    209                       2606    16429    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    205                       2606    16402    public.users users_pk 
   CONSTRAINT     U   ALTER TABLE ONLY public."public.users"
    ADD CONSTRAINT users_pk PRIMARY KEY (id);
 A   ALTER TABLE ONLY public."public.users" DROP CONSTRAINT users_pk;
       public            postgres    false    203                       2606    16427    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    205                       2606    16444    sessions sessions_userId_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
 I   ALTER TABLE ONLY public.sessions DROP CONSTRAINT "sessions_userId_fkey";
       public          postgres    false    205    2832    207                       2606    16464    urls urls_userId_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
 A   ALTER TABLE ONLY public.urls DROP CONSTRAINT "urls_userId_fkey";
       public          postgres    false    205    2832    209            ?      x?????? ? ?      ?   l   x?E̱? ??p????81?/???V?=(???????8?[1y??v?Ax?D??Ň?7T?L?0???Cjl?o????r?`???K??>Ȼuvg~???	|U      ?   ?   x?]?͊?0@?u??@???hMv??QD?4Ml????>??f1p?X???wEQ????????n?os,??b&?n?˗??Z΅I???bU?8E_??tH>Ո???x̢?????(lk?vÀL+???~??? ?F???뿗a???x?2Еm????????V???~?E???Yg?8?-?Ar?ߵb@?      ?   ?   x?m?M??0 ?5=??֯??Jt?A1?M??Ȁբ{?2???¼<b??!?Rr9,ԡG??g?0if0'Q??Z??????!?ٲ]?K???[???S)'???????~B?
?v?u?ߡ?M]?a l??K???:????)??'?R/Qj?T? ?<???h??????>??}Q??J?k?9?q\k?Zf䟅?1B??H?     