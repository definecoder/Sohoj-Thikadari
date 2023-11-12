
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const newsData = [
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
    {
        newsTitle: "২৫-০২-২০২২ খ্রি. হতে ১১-০৩-২০২৩ খ্রি. পর্যন্ত গমের সূচি, উপ-সূচি ও মেয়াদ দেখতে ক্লিক করূন",
        newsLink: "https://dgfood.portal.gov.bd/site/files/95f9be06-034c-4bee-83e4-8f766e7bd0e6",
    },
];


const addNews = async () => {

    const news = await prisma.news.createMany({
        data: newsData
    })
    

}

addNews();


